import { React, useState } from 'react';

import { Button, collapseClasses, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import './bookingBox.scss';
import { color, style } from '@mui/system';

export default function BookingBox({item}){

    const [open, setOpen] = useState(false);

    const date = new Date(item.dateAndTime);

    const dateText = `${date.getDate()}/${date.getMonth()+1}/${date.getYear()+1900}`

    const book = (_id) => {
        handleOpen();
    }

    const bookConfirmed = (id) => {
        setOpen(false);
        alert(id);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
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
                autofocus
                margin="dense"
                id="nameInput"
                label="Navn"
                type="text"
                fullWidth
                required
                variant="standard"
                />
                <TextField 
                autofocus
                margin="dense"
                id="comment"
                label="Evt. kommentar"
                type="text"
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