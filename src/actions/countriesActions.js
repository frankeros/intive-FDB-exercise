const countriesApiUrl = "https://restcountries.eu/rest/v2/all";

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesRequest());
    
    return fetch(countriesApiUrl)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchCountriesSuccess(data));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchCountriesFailed(error));
          })
        }
      })
  }
}

export const fetchCountriesRequest = () => {
  return {
    type: 'FETCH_COUNTRIES_REQUEST'
  }
}

export const fetchCountriesSuccess = (countries) => {
  return {
    type: 'FETCH_COUNTRIES_SUCCESS',
    countries: countries,
    message:'success',
    receivedAt: Date.now
  }
}

export const fetchCountriesFailed = (error) => {
  return {
    type: 'FETCH_COUNTRIES_FAILED',
    error
  }
}







