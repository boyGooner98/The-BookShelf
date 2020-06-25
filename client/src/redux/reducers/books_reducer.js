export default function (state = {}, action) {
    switch (action.type) {
      case 'GetBook':
        return {
          ...state,
          book: action.payload.book,
          reviewer: action.payload.reviewer,
        };
      case 'GetBooks':
        return { ...state, list: action.payload };
      default:
        return state;
    }
}