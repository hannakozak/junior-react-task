import React from 'react';
import { AttributeLabel } from '../attributesList/AttributesList.styled';
import { PriceStyled } from './Price.styled';

export class Price extends React.Component {
  render() {
    const { product, selectedCurrency } = this.props;
    return (
      <>
        <AttributeLabel>Price:</AttributeLabel>
        {product.prices &&
          product.prices
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
