export default function selectCritic(critic) {
  return {
    type: 'SELECT_CRITIC',
    payload: critic
  };
}