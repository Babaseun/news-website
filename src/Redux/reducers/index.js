const initialState = {
 isLoading: false,
 headlinesNG: [],
 errors: ''
};

export const reducerNG = (state = initialState, action) => {
 switch (action.type) {
  case 'BEGIN_FETCH_REQUEST':
   return {
    ...state,
    isLoading: true
   };
  case 'FETCH_HEADLINES_NIGERIA':
   return {
    ...state,
    isLoading: false,
    headlinesNG: action.payload
   };
  case 'ERRORS_FOR_NG':
   return {
    ...state,
    errors: action.payload
   };

  default:
   return state;
 }
};
