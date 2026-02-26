import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FocusOnFeatures from './components/FocusOnFeatures';
import ProductShowcase from './components/ProductShowcase';
import ReadyToTransform from './components/ReadyToTransform';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <FocusOnFeatures />
      <ReadyToTransform />
      <Footer />
    </div>
  );
}

export default App;







