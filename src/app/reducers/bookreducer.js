let initialState = {
  data: null
};

export default function bookReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        data: action.result.data
      }
    default:
      return state;
  }
}