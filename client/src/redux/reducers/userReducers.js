export default function (state = {}, action) {
  switch (action.type) {
    case 'getUser':
      return { ...state, user: action.payload };
    case 'isAuth':
      return {...state,canAcess:action.payload}
    default:
      return state;
  }
}
