import _ from 'lodash';
import {RECEIVE_CRYPTOCURRENCIES, UPDATE_IN_FLIGHT, UPDATE_FETCH_ERROR} from '../actions/cryptocurrencies';

let defaultState = {
    inFlight: false,
    error: null,
    currencies: {}
};

export default function cryptocurrencies (state = defaultState, action) {
    switch (action.type) {

    case UPDATE_IN_FLIGHT:
        return _.assign({}, state, {
            inFlight: action.inFlight
        });

    case RECEIVE_CRYPTOCURRENCIES:
        // This can be improved by using immutableJS/etc (omitted here for brevity)
        // Immutable would not return a new object if the fetched currency data is identical
        // This implementation will return a new object, causing a re-render
        return _.assign({}, state, {
            currencies: action.currencies,
            inFlight: false
        });

    case UPDATE_FETCH_ERROR:
        return _.assign({}, state, {
            error: action.error,
            inFlight: false
        });

    default:
        return state;
    }
}
