import React from 'react';
import { Header } from '../header/Header';
import { withParams } from '../../helpers/withParams';
import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../../features/categoryProducts/categoryProductsSlice';
import { CategoryWrapper } from './Category.styled';

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
        <h1> {categoryName}</h1>
        {this.props.products.map((product) => (
          <div key={product.name}>
            {product.name}{' '}
            <img src={product.gallery[0]} style={{ width: 100, height: 100 }} />
            <div>
              {product.prices
                .filter(
                  (cur) => cur.currency.symbol === this.props.selectedCurrency
                )
                .map((price) => (
                  <div key={price.amount}>
                    {price.currency.symbol} {price.amount}
                  </div>
                ))}
            </div>
          </div>
        ))}
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
