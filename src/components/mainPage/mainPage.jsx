import {React, useEffect} from 'react'
import './mainPage.scss'

export default function MainPage() {
    useEffect(() => {
        fetch('http://localhost:8030/getAll')
        .then((response) => response.json())
        .then((data) => console.log(data));
        }, []);

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
