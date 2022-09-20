import React from 'react';
import { connect } from 'react-redux';
import {
  fetchCurrencies,
  selectCurrency
} from '../../features/currencies/currenciesSlice';
import {
  CurrnecyCheckerView,
  CurrencyDropdown,
  CurrencyOption,
  CurrencyPrice
} from './CurrencySwitcher.styled';
import arrowDown from '../../images/arrow-down.svg';
import arrowUp from '../../images/arrow-up.svg';

class CurrencySwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSwitcherVissible: false };

    this.handleChange = this.handleChange.bind(this);
    this.toggleSwitcherVisibility = this.toggleSwitcherVisibility.bind(this);
  }

  toggleSwitcherVisibility() {
    this.setState((prevState) => ({
      isSwitcherVissible: !prevState.isSwitcherVissible
    }));
  }
  handleChange(currency) {
    this.props.selectCurrency(currency);
    this.toggleSwitcherVisibility();
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {
    return (
      <>
        <CurrnecyCheckerView onClick={this.toggleSwitcherVisibility}>
          {this.props.selectedCurrency}
          {this.state.isSwitcherVissible ? (
            <img src={arrowUp} alt="arrow closes currency dropdown" />
          ) : (
            <img src={arrowDown} alt="arrow opens currency dropdown" />
          )}
        </CurrnecyCheckerView>
        {this.state.isSwitcherVissible &&
          this.props.fetchCurrenciesStatus === 'SUCCESS' && (
            <CurrencyDropdown>
              {this.props.currencies.map((currency) => (
                <CurrencyOption
                  key={currency.label}
                  value={currency.symbol}
                  onClick={() => this.handleChange(currency.symbol)}
                >
                  <CurrencyPrice>
                    {currency.symbol} {currency.label}
                  </CurrencyPrice>
                </CurrencyOption>
              ))}
            </CurrencyDropdown>
          )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies.currencies,
  fetchCurrenciesStatus: state.currencies.fetchCurrenciesStatus,
  selectedCurrency: state.currencies.selectedCurrency
});

export default connect(mapStateToProps, { fetchCurrencies, selectCurrency })(
  CurrencySwitcher
);
