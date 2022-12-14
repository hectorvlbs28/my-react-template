import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Template
import NotFound from '../Templates/NotFound';
import PrivateRoutes from './PrivateRoutes';

// Screens
import Home from '../Screens/Home/Home';
import Login from '../Screens/Login/Login';

const RouterIndex = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default RouterIndex;
