import {createSelector} from 'reselect';

export const inFlight$ = state => state.cryptocurrencies.inFlight;
export const error$ = state => state.cryptocurrencies.error;

// Memoizes currencies
export const currencies$ = createSelector(state => state.cryptocurrencies.currencies, (currencies) => {
    return {
        currencies
    };
});

// Used by the refresh button to display current request state and an error, if present
export const request$ = createSelector(inFlight$, error$, (inFlight, error) => {
    return {
        inFlight,
        error
    };
});
