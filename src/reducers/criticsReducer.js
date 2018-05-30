export function criticsReducer(state = [], action) {
  if (action.type === ('GET_CRITICS')) {
    return action.payload;
  }
  return state;
}