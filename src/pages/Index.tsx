
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Dashboard from '../components/Dashboard';
import HomePage from '../components/HomePage';
import ProductListing from '../components/ProductListing';
import ProductDetail from '../components/ProductDetail';
import ItemDetail from '../components/ItemDetail';
import AddItem from '../components/AddItem';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import About from '../components/About';
import Contact from '../components/Contact';
import HowItWorks from '../components/HowItWorks';
import Impact from '../components/Impact';
import AdminPanel from '../components/admin/AdminPanel';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/items" element={<ProductListing />} />
          <Route path="/items/:category" element={<ProductListing />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          
          {/* Original fashion e-commerce routes */}
          <Route path="/shop" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:category" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Common pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
