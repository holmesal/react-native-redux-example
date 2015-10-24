import Immutable from 'immutable';

let CONSTRUCT = () => {
	console.info('construct is running!')
	return Immutable.Map({});
}

let UPDATE_CRYPTOCURRENCIES = (domain, action) => {
	console.info('update!', domain, action);
	return domain;
}

export {
	CONSTRUCT,
	UPDATE_CRYPTOCURRENCIES
};