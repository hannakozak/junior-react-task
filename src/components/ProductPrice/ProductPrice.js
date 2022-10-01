import React from 'react';
import { PriceStyled } from './ProductPrice.styled';

export class ProductPrice extends React.Component {
  render() {
    const { prices, selectedCurrency } = this.props;
    return (
      <>
        {prices &&
          prices
            .filter((cur) => cur.currency.symbol === selectedCurrency)
            .map((price) => (
              <PriceStyled key={price.amount}>
                {price.currency.symbol} {price.amount}
              </PriceStyled>
            ))}
      </>
    );
  }
}
