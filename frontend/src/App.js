import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Confirmation from './Pages/Confirmation';
import Technologies from './Pages/Technologies';
import Loader from './Components/Loader';
import Main from './Pages/Main';
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Set loading time to 5 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className='App'>
      
      <ScrollToTop smooth color="#f8f9fa" style={{ backgroundColor: 'red', borderRadius: '50%' }} component={<FaArrowUp />} />
      <Router>
        {isLoading ? (
          <Loader /> 
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
