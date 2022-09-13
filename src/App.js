import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import CategoryListingPage from './components/CategoryListingPage';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<CategoryListingPage />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryListingPage />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
