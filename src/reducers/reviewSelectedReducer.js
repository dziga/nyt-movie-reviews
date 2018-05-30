export function reviewSelectedReducer(state = JSON.parse(localStorage.getItem('selectedReview')), action) {
  if (action.type === 'SELECT_REVIEW') {
    localStorage.setItem('selectedReview', JSON.stringify(action.payload));
    return action.payload;
  }
  return state;
}