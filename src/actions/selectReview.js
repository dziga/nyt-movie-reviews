export default function selectReview(review) {
  return {
    type: 'SELECT_REVIEW',
    payload: review
  };
}