import React from 'react';
import Header from '../../components/Header/Header';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';
import { CartAttributesList } from '../../components/AttributesList/CartAttributeList';
import { Button } from '../../components/Button/Button';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import plus from '../../images/plus.svg';
import minus from '../../images/minus.svg';
import {
  addItem,
  removeItem,
  calculateTotalPrice,
  reduceTotalPrice
} from '../../features/cart/cartSlice';
import {
  CartWrapper,
  ProductBrand,
  ProductName,
  Main,
  CartProduct,
  Title,
  Summary,
  SummaryLabel,
  SummaryValue,
  Icon,
  CartAction,
  CartActionButtons,
  ProductDetails
} from './Cart.styled';
import { ProductSlider } from '../../components/ProductSlider/ProductSlider';
import { v4 as uuidv4 } from 'uuid';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.props.items;
    }
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
    return (
      <CartWrapper>
        <Header />
        <Title>Cart</Title>
        <Main>
          {this.props.items &&
            this.props.items.map((item) => (
              <CartProduct key={uuidv4()}>
                <ProductDetails>
                  <ProductBrand>{item.brand}</ProductBrand>
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice
                    prices={item.prices}
                    selectedCurrency={this.props.selectedCurrency}
                  />
                  <CartAttributesList
                    product={item}
                    handleInput={this.handleInput}
                  />
                </ProductDetails>
                <CartAction>
                  <CartActionButtons>
                    <Icon>
                      <img
                        src={plus}
                        onClick={() => this.increaseAmount(item)}
                      />
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
              </CartProduct>
            ))}
          <Summary>
            <div>
              <SummaryLabel>Tax 21%:</SummaryLabel>
            </div>

            <div>
              <SummaryLabel>Quantity:</SummaryLabel>
              <SummaryValue>{this.props.items.length}</SummaryValue>{' '}
            </div>
            <div>
              <SummaryLabel> Total:</SummaryLabel>
              <ProductPrice
                prices={this.props.total}
                selectedCurrency={this.props.selectedCurrency}
              />
            </div>
          </Summary>
          <Button>order</Button>
        </Main>
      </CartWrapper>
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
    calculateTotalPrice
  })(Cart)
);
