import React from 'react';
import './App.css';
import Home from './views/home/Home';
import Privacy from './views/privacy/Privacy';
import About from './views/about/About';
import ContactUs from './views/contactus/ContactUs'
function App() {
  return (
    <>

      <Home />
      <ContactUs />
      <About />
      <Privacy />

    </>
  );
}

export default App;
