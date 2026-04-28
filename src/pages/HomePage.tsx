import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ReadyToTransform from '../components/ReadyToTransform';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ReadyToTransform />
      <Footer />
    </div>
  );
};

export default HomePage;
