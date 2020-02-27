import React from 'react'
import '../App.css';

function TeamList(props) {

    return (
        <div>
            <h3>Team Member Name: {props.name} </h3>
            <p>
                <h4>Email: {props.email}</h4>
                <h4>Job Role: {props.role} </h4>
            </p>
            <hr />
        </div>
    )
}


export default TeamList