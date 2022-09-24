import React from 'react';
import { HeaderWrapper, Actions } from './Header.styled';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import basket from '../../images/basket.svg';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';

export class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Navigation />
        <Logo />
        <Actions>
          <CurrencySwitcher />
          <img src={basket} alt="SVG logo image" />
        </Actions>
      </HeaderWrapper>
    );
  }
}
