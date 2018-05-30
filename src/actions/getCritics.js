import Api from '../Api';

export default function getCritics(filter, name) {
  return dispatch => Api.getCritics(filter).then(critics => {
    dispatch({
      type:'GET_CRITICS',
      payload: critics
    })
    if (name) {
      dispatch({
        type:'SELECT_CRITIC',
        payload: selectCriticByName(critics, name)
      })
    }
  })
}

function selectCriticByName(critics, name) {
  const critic = critics.filter(critic => {
    return critic.display_name === name;
  })
  return critic.length ? 
  critic.reduce(a => {
    return a;
  }) : {}
}
