import React, {useState} from 'react';
import {useHistory } from "react-router-dom";

export default function ContactUs(props) {
    let history=useHistory();

    let [formState, setFormState] = useState({
        fullname: "",
        email: "",
        comments: ""
    });    
    const updateFormField = event => {
        setFormState({
        ...formState,
        [event.target.name]: event.target.value
        });
    };
    const submitForm = () => {
        history.push("/form-submitted", {
            state: formState
        });
    };

    return (
        <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <label className="form-label">Full Name:</label>
            <input
            type="text"
            className="form-control"
            name="fullname"
            value={formState.fullname}
            onChange={updateFormField}
            />
        </div>
        <div>
            <label className="form-label">Email</label>
            <input
            type="text"
            className="form-control"
            name="email"
            value={formState.email}
            onChange={updateFormField}
            />
        </div>
        <div>
            <label className="form-label">Comments</label>
            <textarea
            className="form-control mb-3"
            name="comments"
            value={formState.comments}
            onChange={updateFormField}
            rows={5}
            />
        </div>
        <button className="btn btn-primary" onClick={submitForm}>Send Feedback</button>
        </React.Fragment>
    )
}