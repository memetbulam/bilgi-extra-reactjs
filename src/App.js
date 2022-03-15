import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './js/scripts.js';

import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import OurWork from './components/OurWork';
import Products from './components/Products/Products';
import Footer from './components/Footer';

import ProductListContextProvider from './contexts/ProductListContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, far)

function App() {
  return (
    <div className="App">
      <Menu />

      <ProductListContextProvider>
        <div style={{ minHeight: '600px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Products" element={<Products />} />
            <Route path="OurWork" element={<OurWork />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
      </ProductListContextProvider>
      <Footer />
    </div>
  );
}

export default App;