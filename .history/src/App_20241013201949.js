// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardLayout from './components/DashboardLayout';
import NewCampaign from './pages/NewCampaign';
import Overview from './components/'

// Add this import at the top of the file
import 'antd/dist/reset.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/dashboard/NewCampaign" element={<NewCampaign />} />
            <Route path="/dashboard/overview" element={<Overview />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
