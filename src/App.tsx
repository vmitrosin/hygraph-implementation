import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Article from './pages/Article';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
