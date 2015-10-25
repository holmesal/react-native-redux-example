// A simple button
/* eslint-disable react/forbid-prop-types */
import React, {Component, PropTypes, StyleSheet, TouchableOpacity} from 'react-native';

export default class Button extends Component {

    static propTypes = {
        children: PropTypes.any.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={style.container}
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

let style = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#29B6F6',
        height: 60,
        justifyContent: 'center'
    }
});
