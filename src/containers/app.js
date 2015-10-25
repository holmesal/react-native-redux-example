import React, {Component, StyleSheet, View} from 'react-native';
import CurrencyList from '../components/currencyList';
import RefreshButton from '../components/refreshButton';
import AudioButton from '../components/audioButton';
import {Provider} from 'react-redux';

// This "container" is where we'll connect our store
import store from '../store';
import {requestCryptocurrencies} from '../actions/cryptocurrencies';

export default class App extends Component {

    // Request currencies once when the app loads
    componentDidMount() {
        // Request cryptocurrencies right away
        store.dispatch(requestCryptocurrencies());
    }

    // Until react-native@0.14, <Provider> children need to be wrapped in a function
    // See https://github.com/rackt/redux/issues/867
    renderProviderChild() {
        return (
            <View style={styles.container}>
                <RefreshButton />
                <CurrencyList />
                <AudioButton />
            </View>
        );
    }

    render() {
        return (
            <Provider store={store}>
                {this.renderProviderChild}
            </Provider>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 20
    }
});
