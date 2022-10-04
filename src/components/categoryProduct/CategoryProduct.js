import React from 'react';
import { addItem, calculateTotalPrice } from '../../features/cart/cartSlice';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import {
  Product,
  ProductDetails,
  ProductImage,
  BasketIcon,
  PriceStyled
} from './CategoryProduct.styled';
import basket from '../../images/basket-white.svg';
import { v4 as uuidv4 } from 'uuid';

class CategoryProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isBasketIconVissible: false };

    this.toggleBasketIconVisibility =
      this.toggleBasketIconVisibility.bind(this);

    this.addToBasketHandler = this.addToBasketHandler.bind(this);
  }

  toggleBasketIconVisibility() {
    this.setState((prevState) => ({
      isBasketIconVissible: !prevState.isBasketIconVissible
    }));
  }

  addToBasketHandler(e) {
    e.preventDefault();
    console.log(this.props.product);
    let defaultAttributes = {};
    this.props.product.attributes.map((attribute) => {
      defaultAttributes[attribute.id] = attribute.items[0].value;
    });
    this.props.addItem({
      id: uuidv4(),
      brand: this.props.product.brand,
      name: this.props.product.name,
      attributes: this.props.product.attributes,
      prices: this.props.product.prices,
      gallery: this.props.product.gallery,
      selectedAttributes: defaultAttributes,
      amount: 1
    });
    this.props.calculateTotalPrice(this.props.product.prices);
  }

  render() {
    const { product } = this.props;
    return (
      <Product
        onMouseEnter={this.toggleBasketIconVisibility}
        onMouseLeave={this.toggleBasketIconVisibility}
      >
        <ProductImage>
          <img src={product.gallery[0]} />
        </ProductImage>
        {this.state.isBasketIconVissible && (
          <BasketIcon onClick={this.addToBasketHandler}>
            <img src={basket} alt="SVG logo image" />
          </BasketIcon>
        )}
        <ProductDetails>
          {product.name}
          <div>
            {product.prices
              .filter(
                (currency) =>
                  currency.currency.symbol === this.props.selectedCurrency
              )
              .map((price) => (
                <PriceStyled key={uuidv4()}>
                  {price.currency.symbol} {price.amount}
                </PriceStyled>
              ))}
          </div>
        </ProductDetails>
      </Product>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.categoryProducts.products,
  fetchProductsStatus: state.categoryProducts.fetchProductsStatus,
  selectedCurrency: state.currencies.selectedCurrency,
  items: state.cart.items
});

export default withParams(
  connect(mapStateToProps, { addItem, calculateTotalPrice })(CategoryProduct)
);
