const INITIAL_STATE = {  
  countries: [],
  isFetching: false,
  error: null,
  successMsg: null,
}

export const countriesReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES_REQUEST':
      return {
        ...currentState,
        countries: [],
        isFetching: true,
        error: null,
        successMsg: null,
      }
    case 'FETCH_COUNTRIES_SUCCESS':
      return {
        ...currentState,
        countries: action.countries,
        isFetching: false,
        error: null,
        successMsg: action.message,
      }
    case 'FETCH_COUNTRIES_FAILED':
      return {
        ...currentState,
        countries: [],
        isFetching: false,
        error: action.error,
        successMsg: null,
      }
    default:
      return currentState;
  }
}
