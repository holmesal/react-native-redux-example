// Cryptocurrency actions

// Actually fetches the latest cryptocurrency data from firebase
let fetchLatestCryptocurrencyData = () => {
	return fetch('https://publicdata-cryptocurrency.firebaseio.com/.json');
}

// Given some cryptocurrency price data, dispatch an action to update the store
let updateCryptocurrencies = (data) => {
	return {
		name: 'UPDATE_CRYPTOCURRENCIES',
		data: data
	}
};

// Ask that the latest cryptocurrency data be fetched
// This is an async action, using redux's Thunk middleware
let syncCryptocurrencies = () => {
	return (dispatch, getState) => {
		console.info('fetching latest data!', dispatch)
		action = updateCryptocurrencies({
			test: 'one',
			type: 'cryptocurrencies'
		});
		console.info(action, getState().toJS())
		dispatch(action)
		fetchLatestCryptocurrencyData().then(
			data => {
				data.json().then(
					data => {
						console.info('got data!', data, updateCryptocurrencies(data));
						dispatch(updateCryptocurrencies(data));
					}
				)
			},
			error => {
				console.error('error fetching cryptocurrency data: ', error)
			}
		)
	}
}

export {
	updateCryptocurrencies,
	syncCryptocurrencies
};