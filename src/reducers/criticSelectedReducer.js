export function criticSelectedReducer(state = {}, action) {
  if (action.type === 'SELECT_CRITIC') {
    return action.payload;
  }
  return state;
}