import React from 'react';
import {
  Product,
  ProductDetails,
  ProductImage
} from './CategoryProduct.styled';

export class CategoryProduct extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <Product>
        <ProductImage>
          <img src={product.gallery[0]} />
        </ProductImage>

        <ProductDetails>
          {product.name}
          <div>
            {product.prices
              .filter(
                (cur) => cur.currency.symbol === this.props.selectedCurrency
              )
              .map((price) => (
                <div key={price.amount}>
                  {price.currency.symbol} {price.amount}
                </div>
              ))}
          </div>
        </ProductDetails>
      </Product>
    );
  }
}
