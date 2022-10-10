import React from 'react';
import Header from '../../components/header/Header';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../../features/categoryProducts/categoryProductsSlice';
import {
  CategoryTitle,
  CategoryWrapper,
  CategoryProductContainer
} from './CategoryListingPage.styled';
import CategoryProduct from '../../components/categoryProduct/CategoryProduct';
import { Link } from 'react-router-dom';

class CategoryListingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.params.categoryName || 'all');
  }

  componentDidUpdate(prevProps) {
    if (this.props.params !== prevProps.params) {
      this.props.fetchCategoryProducts(this.props.params.categoryName);
    }
  }

  render() {
    let { categoryName } = this.props.params;
    return (
      <CategoryWrapper>
        <Header />
        <CategoryTitle> {categoryName}</CategoryTitle>
        <CategoryProductContainer>
          {this.props.products.map((product) => (
            <Link to={`${product.id}`} key={product.id}>
              <CategoryProduct
                key={product.name}
                product={product}
                selectedCurrency={this.props.selectedCurrency}
              />
            </Link>
          ))}
        </CategoryProductContainer>
      </CategoryWrapper>
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
  connect(mapStateToProps, { fetchCategoryProducts })(CategoryListingPage)
);
