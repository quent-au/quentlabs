import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseQuent from './components/WhyChooseQuent';
import HowQuentWorks from './components/HowQuentWorks';
import CLIExamples from './components/CLIExamples';
import LocalVsCloud from './components/LocalVsCloud';
import FocusOnFeatures from './components/FocusOnFeatures';
import ReadyToTransform from './components/ReadyToTransform';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseQuent />
      <HowQuentWorks />
      <CLIExamples />
      <LocalVsCloud />
      <FocusOnFeatures />
      <ReadyToTransform />
      <Footer />
    </div>
  );
}

export default App;
