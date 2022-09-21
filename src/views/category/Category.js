import React from 'react';
import { Header } from '../../components/header/Header';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../../features/categoryProducts/categoryProductsSlice';
import {
  CategoryTitle,
  CategoryWrapper,
  CategoryProductContainer
} from './Category.styled';
import { CategoryProduct } from '../../components/categoryProduct/CategoryProduct';

class CategoryListingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.params.categoryName);
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
            <CategoryProduct
              key={product.name}
              product={product}
              selectedCurrency={this.props.selectedCurrency}
            />
          ))}
        </CategoryProductContainer>
      </CategoryWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.categoryProducts.products,
  fetchProductsStatus: state.categoryProducts.fetchProductsStatus,
  selectedCurrency: state.currencies.selectedCurrency
});

export default withParams(
  connect(mapStateToProps, { fetchCategoryProducts })(CategoryListingPage)
);
