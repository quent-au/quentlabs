import React from 'react';
import Header from '../components/Header';
import CompanyHero from '../components/CompanyHero';
import Products from '../components/Products';
import FeaturedWork from '../components/FeaturedWork';
import GoogleReviews from '../components/GoogleReviews';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CompanyHero />
      <Products />
      <FeaturedWork />
      <GoogleReviews />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
