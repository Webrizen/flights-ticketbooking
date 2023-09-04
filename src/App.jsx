import React from 'react';
import Home from './components/Home'; //1
import FormSection from './components/formSection'; //2
import Pricing from './components/Pricing'; //5
import Services from './components/Services'; //4
import Testimonial from './components/Testimonial'; //6
import ContentXSection from './components/ContentXSection'; //7
import ContentSection from './components/ContentSection'; //3
import './App.css';

const wrapWithDummyElements = (component, depth) => {
  if (depth === 0) {
    return component;
  }

  const randomKey = Math.random().toString(36).substring(7);
  const dummyElement = <div key={randomKey} className='lp-element lp-pom-block' id={randomKey}>{component}</div>;

  return wrapWithDummyElements(dummyElement, depth - 1);
};

function App() {
  // Wrap each component individually
  const wrappedHome = wrapWithDummyElements(<Home />, 100);
  const wrappedFormSection = wrapWithDummyElements(<FormSection />, 100);
  const wrappedContentSection = wrapWithDummyElements(<ContentSection />, 100);
  const wrappedServices = wrapWithDummyElements(<Services />, 100);
  const wrappedPricing = wrapWithDummyElements(<Pricing />, 100);
  const wrappedTestimonial = wrapWithDummyElements(<Testimonial />, 100);
  const wrappedContentXSection = wrapWithDummyElements(<ContentXSection />, 100);

  // Define the order in which you want to display the components
  const componentsOrder = [
    wrappedHome,
    wrappedFormSection,
    wrappedServices,
    wrappedContentSection,
    wrappedPricing,
    wrappedTestimonial,
    wrappedContentXSection,
  ];
  return (
    <>
      {componentsOrder.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
    </>
  );
}

export default App;