/* eslint-disable react/display-name */
import React from 'react';
import { withParams } from '../helpers/withParams';
import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../features/categoryProducts/categoryProductsSlice';

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
      <>
        <h1> {categoryName}</h1>
        {this.props.products.map((product) => product.name)}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.categoryProducts.products,
  fetchProductsStatus: state.categoryProducts.fetchProductsStatus
});

export default withParams(
  connect(mapStateToProps, { fetchCategoryProducts })(CategoryListingPage)
);
