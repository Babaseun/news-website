const initialState = {
 isLoading: false,
 headlinesUSA: [],
 errors: ''
};

export const reducerUSA = (state = initialState, action) => {
 switch (action.type) {
  case 'BEGIN_FETCH_REQUEST':
   return {
    ...state,
    isLoading: true
   };
  case 'FETCH_HEADLINES_USA':
   return {
    ...state,
    isLoading: false,
    headlinesUSA: action.payload
   };
  case 'ERRORS_FOR_USA':
   return {
    ...state,
    errors: action.payload
   };

  default:
   return state;
 }
};
