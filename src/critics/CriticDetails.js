import React from 'react';
import renderHTML from 'react-render-html';

const CriticDetails = (props) => {

  const biography = () => {
    if (props.critic.bio) {
      return <div>{renderHTML(props.critic.bio)}</div>
    }
    return <div>...</div>
  }

  const multimedia = () => {
    if (props.critic.multimedia) {
      return (
        <div>
          <br/>
          <img alt="" src={props.critic.multimedia.resource.src} height={props.critic.multimedia.resource.width} width={props.critic.multimedia.resource.height}/>
        </div>
      )
    }
    return <div></div>
  }

  if(!props.critic) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{props.critic.display_name} ({props.critic.status})</h2>
      {biography()}
      {multimedia()}
    </div>
  )
}

export default CriticDetails;