export function reviewsReducer(state = [], action) {
  if (action.type === ('GET_REVIEWS')) {
    return action.payload;
  }
  return state;
}