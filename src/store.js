import {createStore, applyMiddleware} from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux-immutable';

// Import all reducers
import * as cryptocurrencies from './reducers/cryptocurrencies';

console.info(cryptocurrencies)
// Combine reducers into one
let rootReducer = combineReducers({
	cryptocurrencies
});

// Initial state for us will just be an empty object
// In a complex application, we might rehydrate this state from AsyncStorage or etc
let state = Immutable.Map({});
state = rootReducer(state, {
	name: 'CONSTRUCT'
})

// Apply the middleware - we're using redux-thunk for async actions
const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore)

// Create the store with an initial state
const store = createStoreWithMiddleware(rootReducer, state);

export default store;