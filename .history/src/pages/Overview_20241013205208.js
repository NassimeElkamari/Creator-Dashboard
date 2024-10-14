import React, { useState } from 'react'
import Header from '../components/OverviewHeader'

const Overview = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <div>Overview Content</div>;
      case 'Audience':
        return <div>Audience Content</div>;
      case 'Engagement':
        return <div>Engagement Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen px-4 bg-slate-50">
      <Header />
      di
    </div>
  );
}

export default Overview
