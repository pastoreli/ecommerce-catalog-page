import React from 'react';

// Pages
import HomePage from './pages/Home';

// Components
import { Header, Footer } from './components';

// Providers
import { CartProvider } from './hooks/useCart';
import { ProductsProvider } from './hooks/useProducts';
import { ToastProvider } from './hooks/useToast';

const App: React.FC = () => (
  <div className='App'>
    <ProductsProvider>
      <CartProvider>
        <ToastProvider>
          <Header />
          <HomePage />
          <Footer />
        </ToastProvider>
      </CartProvider>
    </ProductsProvider>
  </div>
);

export default App;
