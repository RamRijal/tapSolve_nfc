import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import TopLoadingBar from './components/ui/TopLoadingBar';
import MainLayout from './layout/MainLayout';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import ProductDetailPage from './pages/Products/[id]';
import Support from './pages/Support';
import UnderConstruction from './components/UnderConstruction';
import Order from './pages/Order';

function App() {

  return (
    <Router>
      <MainLayout>
        <TopLoadingBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<UnderConstruction />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/faqs" element={<FAQs />} /> */}
          <Route path="/support" element={<Support />} />
          <Route path="/order-now" element={<Order />} />
        </Routes>
      </MainLayout>

    </Router>
  )
}

export default App
