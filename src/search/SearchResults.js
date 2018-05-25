import React from 'react';
import SearchResult from './SearchResult';
import './SearchResults.css';

const SearchResults = (props) => {

  const listReviews = () => {
    return props.reviews.map((review, index) => {
      return <li className="list-item" key={index}><SearchResult review={review} onReviewSelection={props.onReviewSelection}/></li>
    })
  }

  if(!props.reviews.length) {
     return <div>Loading...</div> 
  }
  return <ul className="list">{listReviews()}</ul>
}

export default SearchResults;