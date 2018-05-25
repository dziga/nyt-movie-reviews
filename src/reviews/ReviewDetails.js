import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewDetails.css';

const ReviewDetails = (props) => {
  if(!props.review) {
    return <div className="summary">Select a review</div>
  }
  return (
    <div>
      <h3>{props.review.headline}</h3>
      <div className="review-meta">
        Rating: {props.review.mpaa_rating} | 
        Opening date: {props.review.opening_date}  | 
        Publication date: {props.review.publication_date} 
        <div className="image-frame">
          <img alt="" src={props.review.multimedia.src} height={props.review.multimedia.height} width={props.review.multimedia.width} />
        </div>
      </div>
      <div className="summary">
        {props.review.summary_short}
        <br/>
        <br/>
        <a href={props.review.link.url}>{props.review.link.suggested_link_text} </a>
         written by <Link to={`/critics/${formatAuthorName(props.review.byline)}`}>{formatAuthorName(props.review.byline)}</Link>
      </div>
    </div>
  )
}

const formatAuthorName = (name) => {
  return name.replace('.', '. ').split(' ').map(n => {
    return n.replace(/^(.){1}((.)+)/, ($1, $2, $3) => { return $2.toUpperCase() + $3.toLowerCase(); });
  }).reduce((a, b) => {
    return `${a} ${b}`;
  })
}

export default ReviewDetails;