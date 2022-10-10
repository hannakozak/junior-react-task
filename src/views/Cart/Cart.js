import React from 'react';
import Header from '../../components/header/Header';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';
import CartItem from '../../components/CartItem/CartItem';
import { Button } from '../../components/Button/Button';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';

import {
  addItem,
  removeItem,
  calculateTotalPrice,
  reduceTotalPrice
} from '../../features/cart/cartSlice';
import {
  CartWrapper,
  Main,
  Title,
  Summary,
  SummaryLabel,
  SummaryValue,
  ButtonAction
} from './Cart.styled';
import { v4 as uuidv4 } from 'uuid';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CartWrapper>
        <Header />
        <Title>Cart</Title>
        <Main>
          {this.props.items &&
            this.props.items.map((item) => (
              <CartItem key={uuidv4()} item={item} />
            ))}
          <Summary>
            <div>
              <SummaryLabel>Tax 21%:</SummaryLabel>
              <ProductPrice
                fontSize={2.4}
                fontWeight={700}
                prices={this.props.tax}
                selectedCurrency={this.props.selectedCurrency}
              />
            </div>

            <div>
              <SummaryLabel>Quantity:</SummaryLabel>
              <SummaryValue>{this.props.items.length}</SummaryValue>{' '}
            </div>
            <div>
              <SummaryLabel> Total:</SummaryLabel>
              <ProductPrice
                fontSize={2.4}
                fontWeight={700}
                prices={this.props.total}
                selectedCurrency={this.props.selectedCurrency}
              />
            </div>
          </Summary>
          <ButtonAction>
            <Button>order</Button>
          </ButtonAction>
        </Main>
      </CartWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  total: state.cart.total,
  selectedCurrency: state.currencies.selectedCurrency,
  selectedPhoto: state.product.selectedPhoto,
  tax: state.cart.tax
});

export default withParams(
  connect(mapStateToProps, {
    addItem,
    removeItem,
    reduceTotalPrice,
    calculateTotalPrice
  })(Cart)
);
