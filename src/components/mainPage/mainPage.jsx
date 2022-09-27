import { React, useEffect, useState } from 'react'
import { Button } from '@mui/material'
import './mainPage.scss'
import BookingBox from '../bookingBox/bookingBox'

export default function MainPage() {
    var [varaible, setVariable] = useState()
    useEffect(() => {
        if (varaible !== undefined) return
        fetch('https://carolinehair.herokuapp.com/getAll')
            .then((response) => response.json())
            .then((json) => setVariable(json))
    })

    return (
        <div className="mainPage">
            <div className="left">
                <h1 className="BookingHeadline">Tider</h1>
                {varaible ? (
                    varaible.map((item, index) => <BookingBox item={item} />)
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
            <div className="right">
                <h1>Om side:</h1>
                <p>Kommer snart...</p>
                <p>Dog skal man meget gerne kunne bestille tider</p>
                <h1>⬅</h1>
            </div>
        </div>
    )
}
