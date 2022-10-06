import React from 'react';
import Header from '../../components/Header/Header';
import { AttributesList } from '../../components/AttributesList/AttributesList';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import { Button } from '../../components/Button/Button';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { fetchProduct, selectPhoto } from '../../features/product/productSlice';
import {
  addItem,
  calculateTotalPrice,
  calculateTax
} from '../../features/cart/cartSlice';
import {
  ProductWrapper,
  Main,
  Description,
  ProductBrand,
  ProductName,
  ProductInformation
} from './ProductDescriptionPage.styled';
import DOMPurify from 'dompurify';
import { v4 as uuidv4 } from 'uuid';
import { AttributeLabel } from '../../components/AttributesList/AttributesList.styled';

class ProductDescriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedAttr: [] };

    this.addToBasketHandler = this.addToBasketHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleChange(photo) {
    this.props.selectPhoto(photo);
  }

  async componentDidMount() {
    await this.props.fetchProduct(this.props.params.productId);
    this.handleChange(this.props.product.gallery[0]);
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.props.fetchProduct(this.props.params.productId);
    }
  }

  handleInput(event) {
    this.setState((prevState) => ({
      selectedAttr: {
        ...prevState.selectedAttr,
        ...{ [event.target.name]: event.target.value }
      }
    }));
  }

  addToBasketHandler() {
    this.props.addItem({
      id: uuidv4(),
      brand: this.props.product.brand,
      name: this.props.product.name,
      attributes: this.props.product.attributes,
      prices: this.props.product.prices,
      gallery: this.props.product.gallery,
      selectedAttributes: this.state.selectedAttr,
      amount: 1
    });
    this.props.calculateTotalPrice(this.props.product.prices);
    this.props.calculateTax();
  }

  render() {
    const { product, selectedCurrency, selectedAttribute } = this.props;
    return (
      <ProductWrapper>
        <Header />
        <Main>
          <ProductGallery />
          <ProductInformation>
            <ProductBrand>{product.brand}</ProductBrand>
            <ProductName>{product.name}</ProductName>
            <AttributesList
              product={product}
              handleInput={this.handleInput}
              selectedAttribute={selectedAttribute}
            />
            <AttributeLabel>Price:</AttributeLabel>
            <ProductPrice
              prices={product.prices}
              selectedCurrency={selectedCurrency}
            />
            <Button onClick={this.addToBasketHandler}>Add To Card</Button>
            <Description
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description)
              }}
            />
          </ProductInformation>
        </Main>
      </ProductWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  fetchProductStatus: state.product.fetchProductStatus,
  selectedPhoto: state.product.selectedPhoto,
  selectedCurrency: state.currencies.selectedCurrency,
  items: state.cart.items,
  selectedAttributes: state.cart.selectedAttributes
});

export default withParams(
  connect(mapStateToProps, {
    fetchProduct,
    selectPhoto,
    addItem,
    calculateTotalPrice,
    calculateTax
  })(ProductDescriptionPage)
);
