import React, { useState } from 'react';

import Data from './components/Data';
import TeamList from './components/TeamList';
import Form from './components/Form'

import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState(Data);
  console.log(teamMember);

  const addNewPerson = person => {
    const newPerson = {
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      role: person.role
    };
    setTeamMember([...teamMember, newPerson]);
  }

  return (
    <div className="App">
      <div className='form'>
        <h1>Potential Team Member</h1>
        <Form addNewPerson={addNewPerson} />
      </div>
      <div className='team-list'>
        <h1 className="team-members-title">Team Members</h1>
        {teamMember.map(member => <TeamList key={member.id} name={`${member.firstName} ${member.lastName}`} email={member.email} role={member.role} />)}
      </div>
    </div>
  );
}

export default App;
