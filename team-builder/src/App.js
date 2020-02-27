import React, { useState } from 'react';

import Data from './components/Data';
import TeamList from './components/TeamList';

import './App.css';

function App() {

  const [teamMember, setTeamMember] = useState(Data);
  console.log(teamMember);

  return (
    <div className="App">
      <h1 className="team-members-title">Team Members</h1>
      {teamMember.map(member => <TeamList key={member.id} name={`${member.firstName} ${member.lastName}`} email={member.email} role={member.role} />)}
    </div>
  );
}

export default App;
