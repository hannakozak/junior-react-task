import React from 'react';
import { ButtonStyled } from './Button.styled';

export class Button extends React.Component {
  render() {
    const { type, onClick, children, ...props } = this.props;
    return (
      <ButtonStyled type={type} onClick={onClick} {...props}>
        {children ? <div>{children}</div> : null}
      </ButtonStyled>
    );
  }
}
