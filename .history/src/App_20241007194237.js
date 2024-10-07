// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Overview';
import Campaigns from './pages/Campaigns';
import Subscribers from './pages/Subscribers';
import Settings from './pages/Settings';
import EmailPerformance from './pages/EmailPerformance';
import ContentModeration from './pages/ContentModeration';
import Analytics from './pages/Analytics';
import UserManagement from './pages/UserManagement';
import Notifications from './pages/Notifications';

// Add this import at the top of the file
import 'antd/dist/antd.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/dashboard/overview" element={<Overview />} />
            <Route path="/dashboard/campaigns" element={<Campaigns />} />
            <Route path="/dashboard/subscribers" element={<Subscribers />} />
            <Route path="/dashboard/emailPerformance" element={<EmailPerformance />} />
            <Route path="/dashboard/contentModeration" element={<ContentModeration />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/userManagement" element={<UserManagement />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
