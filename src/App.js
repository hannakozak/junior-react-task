import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './views/Cart/Cart';
import CategoryListingPage from './views/CategoryListingPage/CategoryListingPage';
import ProductDescriptionPage from './views/ProductDescriptionPage/ProductDescriptionPage';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryListingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:categoryName" element={<CategoryListingPage />} />
          <Route
            path=":categoryName/:productId"
            element={<ProductDescriptionPage />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
