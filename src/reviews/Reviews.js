import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import SearchInput from '../search/SearchInput';
import SearchResults from '../search/SearchResults';
import ReviewDetails from './ReviewDetails';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectReview, getReviews } from '../actions';
import './Reviews.css';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      selectedReview: null
    };
  }
  
  search = event => {
    event.persist();
    debounce(() => this.props.getReviews(event.target.value), 500)();
  }

  componentDidMount() {
    this.props.getReviews('');
  }

  render() { 
    return (
      <div>
        <SearchInput handler={this.search}/>
        <div className="review-section"> 
          <ReviewDetails review={this.props.selectedReview}/>
        </div>
        <div className="review-section"> 
          <SearchResults reviews={this.props.reviews} onReviewSelection={this.props.selectReview}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    reviews: state.reviews,
    selectedReview: state.selectedReview
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getReviews, selectReview}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Reviews);