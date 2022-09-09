import { React, useEffect} from 'react'
import {Button} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import './mainPage.scss'

export default function MainPage() {

  useEffect(() => {
    
    fetch('https://carolinehair.herokuapp.com/getAll')
      .then(response => response.json())
      .then(json => console.log(json));
  });
  
  return (
    <div className='mainPage'>
        <div className='left'>
            <Button variant='contained'><h1>Hello there!</h1></Button>
            <DataGrid
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
        </div>
        <div className='right'>
            <h1>right</h1>
        </div>
    </div>
  )
}
