// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardLayout from './components/DashboardLayout';
import NewCampaign from './pages/NewCampaign';
import Campaigns from './pages/Campaigns';
import Subscribers from './pages/Subscribers';
import Settings from './pages/Settings';
import EmailPerformance from './pages/EmailPerformance';
import ContentModeration from './pages/ContentModeration';
import Analytics from './pages/Analytics';
import UserManagement from './pages/UserManagement';
import Notifications from './pages/Notifications';

// Add this import at the top of the file
import 'antd/dist/reset.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/dashboard/uploadVideo" element={<NewCampaign />} />
            <Route path="/dashboard/campaigns" element={<Campaigns />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
