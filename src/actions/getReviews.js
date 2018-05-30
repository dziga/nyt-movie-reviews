import Api from "../Api";

export default function getReviews(term) {
  return dispatch => Api.searchReviews(term).then(reviews => {
    dispatch({
      type: 'GET_REVIEWS',
      payload: reviews
    })
  })
}