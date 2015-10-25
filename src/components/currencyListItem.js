// List item, for displaying a single currency
import React, {Component, Image, PropTypes, StyleSheet, Text, View} from 'react-native';

export default class CurrencyListItem extends Component {

    static propTypes = {
        currency: PropTypes.shape({
            last: PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.string.isRequired
    }

    // Dymanically loading these is discouraged, so they're all required here
    // This is only necessary for local images in .xcassets
    // See https://facebook.github.io/react-native/docs/image.html#static-resources
    images = {
        bitcoin: require('image!bitcoin'),
        dogecoin: require('image!dogecoin'),
        litecoin: require('image!litecoin')
    }

    render() {
        return (
            <View style={style.container}>
                <Image
                    source={this.images[this.props.name]}
                    style={style.logo}
                />
                <View style={style.info}>
                    <Text style={style.name}>{this.props.name}</Text>
                    <Text style={style.price}>{this.props.currency.last}</Text>
                </View>
            </View>
        );
    }
}

let style = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomColor: '#DEDEDE',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingTop: 20
    },
    logo: {
        height: 50,
        marginRight: 20,
        width: 50
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 20
    },
    name: {
        color: '#202020',
        flex: 1,
        fontWeight: '600',
        fontSize: 20
    },
    price: {
        fontSize: 16,
        fontWeight: '400'
    }
});

