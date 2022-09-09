import { React, useEffect, useState} from 'react'
import {Button} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import './mainPage.scss'
import BookingList from '../bookingList/bookingList';

export default function MainPage() {

  var [varaible, setVariable] = useState();
  useEffect(() => {
    if(varaible != undefined) return;
    fetch('/getAll')
      .then(response => response.json())
      .then(json => setVariable(json))
      .then(json => console.log(json));
  });
  
  return (
    <div className='mainPage'>
        <div className='left'>
            <Button variant='contained'><h1>Hello there!</h1></Button>
            <BookingList />
            {varaible ? <h1>{varaible[1].title}</h1> : <h1>Loading...</h1>}
        </div>
        <div className='right'>
            <h1>right</h1>
        </div>
    </div>
  )
}
