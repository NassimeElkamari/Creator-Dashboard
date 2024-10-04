// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Overview from './pages/Overview';
import Campaigns from './pages/Campaigns';
import Subscribers from './pages/Subscribers';
import Reports from './pages/Analytics';
import Settings from './pages/Settings';
import EmailPerformance from './pages/EmailPerformance';
import ContentModeration from './pages/ContentModeration';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/campaigns" element={<Campaigns />} />
          <Route path="/dashboard/subscribers" element={<Subscribers />} />
          <Route path="/dashboard/emailPerformance" element={<EmailPerformance />} />
          <Route path="/dashboard/contentModeration" element={<ContentModeration />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
