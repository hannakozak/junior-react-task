import React from 'react';
import logo from '../../images/logo.svg';
import { LogoWrapper } from './Logo.styled';

export class Logo extends React.Component {
  render() {
    return (
      <LogoWrapper>
        <img src={logo} alt="SVG logo image" />
      </LogoWrapper>
    );
  }
}
