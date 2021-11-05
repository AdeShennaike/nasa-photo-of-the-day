import React, {useState, useEffect} from 'react'


export default function Body (props) {

return (
    <div>
        <p>{props.date}</p>
        <img src={props.hdurl} alt='The nebula'/>
        <p>{props.explanation}</p>
    </div>
)
}