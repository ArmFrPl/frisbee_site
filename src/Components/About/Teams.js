import React, { Component } from 'react';
import AllTeams from './allTeams';
import './teams.css';

class Teams extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>TEAMS</h4>
        </div>
        <AllTeams />
      </div>
    );
  }
}

export default Teams;
