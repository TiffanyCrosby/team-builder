import React, { useState } from 'react'
import '../App.css';

function Form(props) {

    const [teamMember, setTeamMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setTeamMember({
            ...teamMember,
            [e.target.name]: e.target.value
        });
    }

    const SubmitForm = e => {
        e.preventDefault();
        props.addNewPerson(teamMember);
        setTeamMember({
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        });
    };


    return (
        <div>
            <form onSubmit={SubmitForm}>
                <span className='label'>
                    <label htmlFor="firstName"> Member First Name: </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={teamMember.firstName}
                        onChange={handleChanges}
                    />
                </span>

                <span className='label'>
                    <label htmlFor="lastName">Member Last Name: </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={teamMember.lastName}
                        onChange={handleChanges}
                    />
                </span>

                <br />

                <span className='label'>
                    <label htmlFor="emailInput">Member Email: </label>
                    <input
                        id="emailInput"
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={teamMember.email}
                        onChange={handleChanges}
                    />
                </span>

                <span className='label'>
                    <label htmlFor="roleInput">Member Job Role: </label>
                    <input
                        id="roleImput"
                        name="role"
                        type="text"
                        placeholder="Role"
                        value={teamMember.role}
                        onChange={handleChanges}
                    />
                </span >
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form