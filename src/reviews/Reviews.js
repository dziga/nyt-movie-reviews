import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import Api from '../Api';
import SearchInput from '../search/SearchInput';
import SearchResults from '../search/SearchResults';
import ReviewDetails from './ReviewDetails';
import './Reviews.css';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      selectedReview: JSON.parse(localStorage.getItem('selectedReview') || null)
    };
  }

  search = event => {
    event.persist();
    debounce(() => this.getReviews(event.target.value), 500)();
  }

  getReviews(term) {
    Api.searchReviews(term).then(reviews => {
      this.setState({
        reviews
      })
    })
  }

  selectReview = (selectedReview) => {
    this.setState({
      selectedReview
    })
    localStorage.setItem('selectedReview', JSON.stringify(selectedReview));
  }

  componentDidMount() {
    this.getReviews('');
  }

  render() { 
    return (
      <div>
        <SearchInput handler={this.search}/>
        <div className="review-section"> 
          <ReviewDetails review={this.state.selectedReview}/>
        </div>
        <div className="review-section"> 
          <SearchResults reviews={this.state.reviews} onReviewSelection={this.selectReview}/>
        </div>
      </div>
    )
  }
}

export default Reviews;