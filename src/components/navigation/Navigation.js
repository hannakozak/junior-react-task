import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../features/categories/categoriesSlice';
import { NavigationWrapper, Label, NavLink } from './Navigation.styled';

class Navigation extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <NavigationWrapper>
        <nav>
          {this.props.fetchCategoriesStatus === 'SUCCESS' &&
            this.props.categories.map((category) => (
              <NavLink key={category.name}>
                <Label to={`/${category.name}`} key={category.name}>
                  {category.name}
                </Label>
              </NavLink>
            ))}
          <NavLink>
            <Label to="/cart">cart</Label>
          </NavLink>
        </nav>
      </NavigationWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  fetchCategoriesStatus: state.categories.fetchCategoriesStatus
});

export default connect(mapStateToProps, { fetchCategories })(Navigation);
