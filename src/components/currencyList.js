/* eslint-disable react/forbid-prop-types */
// Scrollview containing CurrencyItems
import React, {Component, PropTypes, ScrollView, StyleSheet} from 'react-native';
import _ from 'lodash';
import {connect} from 'react-redux/native';
import {currencies$} from '../selectors/cryptocurrencies';

import CurrencyListItem from './currencyListItem';

@connect(currencies$)
export default class CurrencyList extends Component {

    static propTypes = {
        currencies: PropTypes.object.isRequired
    }

    renderCurrencyListItems() {
        return _.map(this.props.currencies, (currency, name) => {
            return (
                <CurrencyListItem
                    currency={currency}
                    key={name}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <ScrollView style={style.container}>
                {this.renderCurrencyListItems()}
            </ScrollView>
        );
    }
}

let style = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    }
});
