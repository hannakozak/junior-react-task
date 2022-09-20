import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/category/Category';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
