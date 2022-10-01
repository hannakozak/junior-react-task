import React from 'react';
import { HeaderWrapper, Actions } from './Header.styled';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import basket from '../../images/basket.svg';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import Cart from '../../views/Cart/Cart';

export class Header extends React.Component {
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
          <div onClick={this.toggleCartVisibility}>
            <img src={basket} alt="SVG logo image" />
          </div>

          {this.state.isCartVissible === true && <Cart />}
        </Actions>
      </HeaderWrapper>
    );
  }
}
