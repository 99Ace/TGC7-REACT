import React from 'react'
import {useLocation} from "react-router-dom"

export default function ContactFormSubmitted(props) {
    let location = useLocation();
    console.log(location.state)
    return (
        <React.Fragment>
            <h1>Thank you for your feedback!</h1>
            <p>Summary of your message</p>
            <ul>
                <li>Fullname:{location.state.state.fullname}</li>
                <li>Email:{location.state.state.email}</li>
                <li>Comments:{location.state.state.comments}</li>
            </ul>
        </React.Fragment>

    )
}