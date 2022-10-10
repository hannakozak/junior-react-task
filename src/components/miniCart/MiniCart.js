import React from 'react';
import { MiniCartAttributesList } from '../AttributesList/MiniCartAttributeList';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { Button } from '../Button/Button';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addItem,
  removeItem,
  calculateTotalPrice,
  reduceTotalPrice,
  calculateTax
} from '../../features/cart/cartSlice';
import {
  MiniCartWrapper,
  CartItemWrapper,
  ProductDetails,
  ProductName,
  ProductBrand,
  CartAction,
  CartActionButtons,
  Icon,
  SummaryLabel,
  Summary,
  ActionButtons,
  Title
} from './MiniCart.styled';
import { v4 as uuidv4 } from 'uuid';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';

class MiniCart extends React.Component {
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
    this.props.calculateTax();
  }

  decreaseAmount(item) {
    this.props.removeItem({
      ...item
    });
    this.props.reduceTotalPrice(item.prices);
    this.props.calculateTax();
  }

  render() {
    return (
      <MiniCartWrapper>
        <Title>My Bag, {this.props.items.length} items </Title>
        {this.props.items &&
          this.props.items.map((item) => (
            <CartItemWrapper key={uuidv4()}>
              <ProductDetails>
                <ProductBrand>{item.brand}</ProductBrand>
                <ProductName>{item.name}</ProductName>
                <ProductPrice
                  fontSize={1.6}
                  fontWeight={500}
                  prices={item.prices}
                  selectedCurrency={this.props.selectedCurrency}
                />
                <MiniCartAttributesList product={item} />
              </ProductDetails>
              <CartAction>
                <CartActionButtons>
                  <Icon>
                    <img src={plus} onClick={() => this.increaseAmount(item)} />
                  </Icon>
                  {item.amount}
                  <Icon>
                    <img
                      src={minus}
                      onClick={() => this.decreaseAmount(item)}
                    />
                  </Icon>
                </CartActionButtons>
                <ProductSlider
                  gallery={item.gallery}
                  selectedPhoto={this.props.selectedPhoto}
                />
              </CartAction>
            </CartItemWrapper>
          ))}
        <div>
          <Summary>
            <SummaryLabel> Total:</SummaryLabel>
            <ProductPrice
              fontSize={1.6}
              fontWeight={500}
              prices={this.props.total}
              selectedCurrency={this.props.selectedCurrency}
            />
          </Summary>
          <ActionButtons>
            <div>
              <Link to="/cart">
                {' '}
                <Button secondary>view bag</Button>
              </Link>
            </div>
            <div>
              <Button>check out</Button>
            </div>
          </ActionButtons>
        </div>
      </MiniCartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  total: state.cart.total,
  selectedCurrency: state.currencies.selectedCurrency,
  selectedPhoto: state.product.selectedPhoto
});

export default withParams(
  connect(mapStateToProps, {
    addItem,
    removeItem,
    reduceTotalPrice,
    calculateTotalPrice,
    calculateTax
  })(MiniCart)
);
