import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DetailPage from './pages/DetailPage';
import ManageDisaster from './pages/ManageDisaster';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/manage-disaster" element={<ManageDisaster />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
