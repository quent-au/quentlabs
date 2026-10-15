import React from 'react';
import Header from '../components/Header';
import CompanyHero from '../components/CompanyHero';
import Products from '../components/Products';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CompanyHero />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
