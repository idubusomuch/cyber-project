import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
