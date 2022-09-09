import { React, useEffect, useState} from 'react'
import {Button} from '@mui/material'
import './mainPage.scss'
import BookingList from '../bookingList/bookingList';

export default function MainPage() {

  var [varaible, setVariable] = useState();
  useEffect(() => {
    if(varaible !== undefined) return;
    fetch('http://carolinehair.herokuapp.com/getAll')
      .then(response => response.json())
      .then(json => setVariable(json))
      .then(json => console.log(json));
  });
  
  return (
    <div className='mainPage'>
        <div className='left'>
        {varaible ? varaible.map((item, index) => (
              <h1>{item.title}</h1>
            )) : <h1>Loading...</h1>}
        </div>
        <div className='right'>
        <Button variant='contained'><h1>Hello there!</h1></Button>
        <BookingList />
        {varaible ? <h1>{varaible[0].title}</h1> : <h1>Loading...</h1>}        </div>
    </div>
  )
}
