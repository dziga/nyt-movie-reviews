import React from 'react';
import Critic from './Critic';
import { Link } from 'react-router-dom';

import './CriticsList.css';

const CriticsList = (props) => {

  const listCritics = () => {
    return props.critics.map((critic, index) => {
      return  <li className="list-item" key={index} onClick={() => props.onCriticSelected(critic.display_name)}>
                <Link to={`/critics/${critic.display_name}`}> 
                  <Critic critic={critic} /> 
                </Link>
              </li>;
    })
    ;
  }

  if (!props.critics.length) {
    return <div>loading...</div>;
  }

  return (
    <ul className="list">{listCritics()}</ul>
  )
}



export default CriticsList;