import React from 'react';
import Home from './components/Home';

const wrapWithDummyElements = (component, depth) => {
  if (depth === 0) {
    return component;
  }

  const randomKey = Math.random().toString(36).substring(7);
  const dummyElement = <div key={randomKey} className='lp-element lp-pom-block' id={randomKey}>{component}</div>;

  return wrapWithDummyElements(dummyElement, depth - 1);
};

function App() {
  const wrappedApp = wrapWithDummyElements(<Home />, 100);

  return (
    <>
      {wrappedApp}
    </>
  );
}

export default App;