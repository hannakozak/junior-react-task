import React from 'react';
import { Header } from '../../components/header/Header';
import { AttributesList } from '../../components/attributesList/AttributesList';
import { Price } from '../../components/price/Price';
import ProductGallery from '../../components/productGallery/ProductGallery';
import { Button } from '../../components/Button/Button';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { fetchProduct, selectPhoto } from '../../features/product/productSlice';
import {
  ProductWrapper,
  Main,
  Description,
  ProductBrand,
  ProductName,
  ProductInformation
} from './ProductDescriptionPage.styled';

import DOMPurify from 'dompurify';

class Product extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <ProductWrapper>
        <Header />
        <Main>
          <ProductGallery />
          <ProductInformation>
            <ProductBrand>{this.props.product.brand}</ProductBrand>
            <ProductName>{this.props.product.name}</ProductName>
            <AttributesList product={this.props.product} />
            <Price
              product={this.props.product}
              selectedCurrency={this.props.selectedCurrency}
            />
            <Button>Add To Card</Button>
            <Description
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(this.props.product.description)
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
  selectedCurrency: state.currencies.selectedCurrency
});

export default withParams(
  connect(mapStateToProps, { fetchProduct, selectPhoto })(Product)
);
