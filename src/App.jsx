import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import OnLoad from './pages/componets/onload';
import Portfolio from './pages/portfolio';

const useRouteLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust loading duration as needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on route change

  return isLoading;
};

const RouteLoaderWrapper = ({ children }) => {
  const isRouteLoading = useRouteLoading();

  // Use your existing OnLoad component for route loading
  if (isRouteLoading) {
    return <OnLoad />;
  }

  return children;
};


function App() {

  return (

    <Router>
      <RouteLoaderWrapper>
        <div className='page-container'>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path='/portfolio' element={<Portfolio/>} />
            </Routes>
          </main>
        </div>
      </RouteLoaderWrapper>
    </Router>
  );
}

export default App;
