import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext';
import { ScrollToTop } from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <ScrollToTop />
    <App />
    </CartProvider>
  </BrowserRouter>
  </React.StrictMode>
);


