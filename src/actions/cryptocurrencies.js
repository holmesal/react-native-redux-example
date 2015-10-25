// Cryptocurrency actions
import superagent from 'superagent';

// Actually fetches the latest cryptocurrency data from firebase
let fetchLatestCryptocurrencyData = (cb) => {
    return superagent
        .get('https://publicdata-cryptocurrency.firebaseio.com/.json')
        .set('Accept', 'application/json')
        .end(cb);
};

// Update the flight status of the request
export const UPDATE_IN_FLIGHT = 'UPDATE_IN_FLIGHT';
let updateInFlight = (inFlight) => ({
    type: UPDATE_IN_FLIGHT,
    inFlight
});

// Given some cryptocurrency price data, dispatch an action to update the store
export const RECEIVE_CRYPTOCURRENCIES = 'RECEIVE_CRYPTOCURRENCIES';
let receiveCryptocurrencies = (currencies) => ({
    type: RECEIVE_CRYPTOCURRENCIES,
    currencies
});

// If the fetch fails, use this action to dispatch an error
export const UPDATE_FETCH_ERROR = 'UPDATE_FETCH_ERROR';
let updateFetchError = (error) => ({
    type: UPDATE_FETCH_ERROR,
    error
});

// We'll track the current in-flight request here, so it can be aborted if another fetch request comes in
let inFlightRequest;

// Ask that the latest cryptocurrency data be fetched
// This is an async action, using redux's Thunk middleware
export const requestCryptocurrencies = () => {
    return (dispatch) => {
        // Abort any currently in-flight requests
        if (inFlightRequest) {
            inFlightRequest.abort();
        }
        // Update the in-flight status in the store
        dispatch(updateInFlight(true));

        inFlightRequest = fetchLatestCryptocurrencyData((err, res) => {
            if (res.ok) {
                // Put this data in the store
                dispatch(receiveCryptocurrencies(res.body));
            } else if (err) {
                dispatch(updateFetchError(err.toString()));
            } else {
                dispatch(updateFetchError(res.text));
            }
            // Clear the in-flight request
            inFlightRequest = null;
        });
    };
};

export {
    receiveCryptocurrencies
};
