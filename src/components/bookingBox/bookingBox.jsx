import { React, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import './bookingBox.scss';
import { color, style } from '@mui/system';

export default function BookingBox({item}){

    const [open, setOpen] = useState(false);

    const date = new Date(item.dateAndTime);

    const dateText = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()+1}/${date.getYear()+1900}`

    const [name, setName] = useState('');
    const [comment, setComment] = useState('Ingen kommentar!');
    
    const book = (_id) => {
        handleOpen();
    }

    const bookConfirmed = (id) => {
        handleClose();
        console.log(name, comment, id);
        var fetchURL;
        //if(Object.keys(name).length === 0) {
        //     
        //}
        if(Object.keys(comment).length === 0) {
            setComment("Ingen kommentar!");
            fetchURL = `https://carolinehair.herokuapp.com/book/${id}/${name}/ingen kommentar`; 
        } else {
            fetchURL = `https://carolinehair.herokuapp.com/book/${id}/${name}/${comment}`
        }
        console.log(fetchURL.replace(/ /g, '%20'));
        fetch(fetchURL.replace(/ /g, '%20'));
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setName('');
        setComment('');
        setOpen(true);
    }

    return(
        <div className='bookingBox'>
            <div className='bookingLeft'>
                <h1 className='title'>{item.title}</h1>
                <p className='date'>{dateText}</p>
            </div>
            <div className='bookingRight'>
                <Button variant='contained' size='large' onClick={() => {book(item._id)}}>Book</Button>
            </div>
            <Dialog open={open} onClose={handleClose} PaperProps={{
                style: {
                    backgroundColor: "#343944",
                    color: "white",
                    '& h6': {
                        color: 'red'
                      }
                }
            }}>
                <DialogTitle>Booking</DialogTitle>
                <DialogContent className="title">
                    <DialogContentText>
                        Booking af: {item.title}
                    </DialogContentText>
                <TextField
                onChange={(e) => setName(e.target.value)} 
                autofocus
                margin="dense"
                id="nameInput"
                label="Navn"
                type="text"
                InputLabelProps={{
                    className: "NameField1"
                }}
                PaperProps={{
                    color: "white"
                }}
                fullWidth
                required
                variant="standard"
                />
                <TextField 
                onChange={(e) => setComment(e.target.value)} 
                autofocus
                margin="dense"
                id="comment"
                label="Evt. kommentar"
                rows={2}
                type="text"
                InputLabelProps={{
                    className: "NameField1"
                }}
                fullWidth 
                variant="standard"
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Afbryd</Button>
                    <Button onClick={() => {bookConfirmed(item._id)}}>Book</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}