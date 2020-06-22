import React from 'react';
import map from 'lodash/map';
import TEAMS from './teamsData';
import { Link } from 'react-router-dom';

const AllTeams = () => (
  <div className="items">
    { 
      map(TEAMS, (team)=> (
        <Link to={`/teams/` + team.link} className="team-link" key={team.id}>
        
          <div key={team.id} className="item">
            
          <div className="team-img">
            <img id="team-logo" alt={team.name} src={team.img} />
          </div>
          <div className="team-details">
            <h1 id="team-name">{team.name}</h1>
          </div>
        </div>
      </Link>
    ))
    }
  </div>
);

export default AllTeams;
