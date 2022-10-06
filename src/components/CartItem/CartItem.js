import React from 'react';
import { CartAttributesList } from '../AttributesList/CartAttributeList';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  calculateTotalPrice,
  reduceTotalPrice
} from '../../features/cart/cartSlice';
import {
  CartItemWrapper,
  ProductDetails,
  ProductBrand,
  ProductName,
  CartAction,
  CartActionButtons,
  Icon
} from './CartItem.styled';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import { v4 as uuidv4 } from 'uuid';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
  }

  increaseAmount(item) {
    this.props.addItem({
      ...item,
      id: uuidv4()
    });
    this.props.calculateTotalPrice(item.prices);
  }

  decreaseAmount(item) {
    this.props.removeItem({
      ...item
    });
    this.props.reduceTotalPrice(item.prices);
  }

  render() {
    const { item, selectedCurrency, selectedPhoto } = this.props;
    return (
      <CartItemWrapper>
        <ProductDetails>
          <ProductBrand>{item.brand}</ProductBrand>
          <ProductName>{item.name}</ProductName>
          <ProductPrice
            fontSize={2.4}
            fontWeight={700}
            prices={item.prices}
            selectedCurrency={selectedCurrency}
          />
          <CartAttributesList product={item} />
        </ProductDetails>
        <CartAction>
          <CartActionButtons>
            <Icon>
              <img src={plus} onClick={() => this.increaseAmount(item)} />
            </Icon>
            {item.amount}
            <Icon>
              <img src={minus} onClick={() => this.decreaseAmount(item)} />
            </Icon>
          </CartActionButtons>
          <ProductSlider gallery={item.gallery} selectedPhoto={selectedPhoto} />
        </CartAction>
      </CartItemWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.cart.total,
  selectedCurrency: state.currencies.selectedCurrency,
  selectedPhoto: state.product.selectedPhoto
});

export default withParams(
  connect(mapStateToProps, {
    addItem,
    removeItem,
    reduceTotalPrice,
    calculateTotalPrice
  })(CartItem)
);
