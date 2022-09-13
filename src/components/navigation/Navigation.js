import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <nav>
        {this.props.fetchCategoriesStatus === 'SUCCESS' &&
          this.props.categories.map((category) => (
            <Link to={`/category/${category.name}`} key={category.name}>
              {category.name}
            </Link>
          ))}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  fetchCategoriesStatus: state.categories.fetchCategoriesStatus
});

export default connect(mapStateToProps, { fetchCategories })(Navigation);
