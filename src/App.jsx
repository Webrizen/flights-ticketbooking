import React from 'react';
import './App.css';
import Home from './components/Home';
import FormSection from './components/FormSection';
import Services from './components/Services';
import ContentSection from './components/ContentSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContentSectionNext from './components/ContentSectionNext';

function App() {
  return (
    <>
      <Home />
      <FormSection />
      <Services />
      <ContentSection />
      <Pricing />
      <Testimonials />
      <ContentSectionNext />
    </>
  );
}

export default App;