// A button that reflects current request state, and can be pressed to refresh prices
import React, {ActivityIndicatorIOS, Component, PropTypes, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux/native';
import {request$} from '../selectors/cryptocurrencies';
import {requestCryptocurrencies} from '../actions/cryptocurrencies';
import Button from './button';

@connect(request$)
export default class RefreshButton extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        inFlight: PropTypes.bool.isRequired
    }

    onPress = () => {
        this.props.dispatch(requestCryptocurrencies());
    }

    render() {
        let contents;

        if (!this.props.inFlight) {
            contents = <Text style={style.text}>Tap me to refresh currencies</Text>;
        } else {
            contents = (
                <ActivityIndicatorIOS
                    animating
                    color={'white'}
                />
            );
        }

        return (
            <Button onPress={this.onPress}>
                {contents}
            </Button>
        );
    }

}

let style = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#29B6F6',
        height: 60,
        paddingTop: 20,
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
});
