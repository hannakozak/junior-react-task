import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import Cart from '../../views/Cart/Cart';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Actions,
  BasketItemsAmount,
  BasketIcon
} from './Header.styled';
import basket from '../../images/basket.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCartVissible: false };

    this.toggleCartVisibility = this.toggleCartVisibility.bind(this);
  }

  toggleCartVisibility() {
    this.setState((prevState) => ({
      isCartVissible: !prevState.isCartVissible
    }));
  }
  render() {
    return (
      <HeaderWrapper>
        <Navigation />
        <Logo />
        <Actions>
          <CurrencySwitcher />
          <BasketIcon onClick={this.toggleCartVisibility}>
            <img src={basket} alt="SVG logo image" />
            <BasketItemsAmount>{this.props.items.length}</BasketItemsAmount>
          </BasketIcon>
          {this.state.isCartVissible === true && <Cart />}
        </Actions>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items
});

export default withParams(connect(mapStateToProps)(Header));
