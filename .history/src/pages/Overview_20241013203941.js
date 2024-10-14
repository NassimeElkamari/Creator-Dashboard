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
    <div className="flex flex-col h-screen">
      <Header />
      <div className="text-center mt-4">
        <h1>Hi Nassime</h1>
        <h2>Subtitle goes here</h2>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => setActiveTab('Overview')} className={activeTab === 'Overview' ? 'active' : ''}>Overview</button>
        <button onClick={() => setActiveTab('Audience')} className={activeTab === 'Audience' ? 'active' : ''}>Audience</button>
        <button onClick={() => setActiveTab('Engagement')} className={activeTab === 'Engagement' ? 'active' : ''}>Engagement</button>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default Overview
