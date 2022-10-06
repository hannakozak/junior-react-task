import React from 'react';
import { PriceStyled } from './ProductPrice.styled';

export class ProductPrice extends React.Component {
  render() {
    const { prices, selectedCurrency, ...props } = this.props;
    return (
      <>
        {prices &&
          prices
            .filter((cur) => cur.currency.symbol === selectedCurrency)
            .map((price) => (
              <PriceStyled key={price.amount} {...props}>
                {price.currency.symbol}{' '}
                {Math.round((price.amount + Number.EPSILON) * 100) / 100}
              </PriceStyled>
            ))}
      </>
    );
  }
}
