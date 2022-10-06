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

    this.wrapperRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.toggleSwitcherVisibility = this.toggleSwitcherVisibility.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrencies();
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.toggleSwitcherVisibility();
    }
  }

  toggleSwitcherVisibility() {
    this.setState((prevState) => ({
      isSwitcherVissible: !prevState.isSwitcherVissible
    }));
  }

  handleChange(currency) {
    this.props.selectCurrency(currency);
    this.handleClickOutside();
  }

  render() {
    return (
      <>
        <CurrnecyCheckerView
          onClick={this.toggleSwitcherVisibility}
          ref={this.wrapperRef}
        >
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
