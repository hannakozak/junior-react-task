import React from 'react';
import { ButtonWrapper, ButtonLabel } from './Button.styled';

export class Button extends React.Component {
  render() {
    const { type, onClick, children } = this.props;
    return (
      <ButtonWrapper type={type} onClick={onClick}>
        <ButtonLabel>{children ? <div>{children}</div> : null}</ButtonLabel>
      </ButtonWrapper>
    );
  }
}
