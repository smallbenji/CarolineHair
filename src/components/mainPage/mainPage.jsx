import {Component, React, useEffect} from 'react'
import './mainPage.scss'
import axios from 'axios'

export default function MainPage() {

  useEffect(() => {
    
    axios.get('http://carolinehair.herokuapp.com/getAll')
    .then(res => console.log(res.data));

  });
  
  return (
    <div className='mainPage'>
        <div className='left'>
            <h1>left</h1>
        </div>
        <div className='right'>
            <h1>right</h1>
        </div>
    </div>
  )
}
