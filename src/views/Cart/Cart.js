import React from 'react';
import { Header } from '../../components/Header/Header';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';
import { CartAttributesList } from '../../components/AttributesList/CartAttributeList';
import { Button } from '../../components/Button/Button';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import {
  CartWrapper,
  ProductBrand,
  ProductName,
  Main,
  CartProduct,
  Title,
  Summary,
  SummaryLabel,
  SummaryValue
} from './Cart.styled';

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
              <CartProduct key={item.id}>
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
  selectedCurrency: state.currencies.selectedCurrency
});

export default withParams(connect(mapStateToProps)(Cart));
