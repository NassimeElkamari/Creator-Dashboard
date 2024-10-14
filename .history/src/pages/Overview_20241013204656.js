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
    <div className="flex flex-col h-screen px-4">
      <Header />
      <div className="text-left mt-4">
        <h1 className="text-2xl font-bold">Hi Nassime</h1>
        <h2 className="text-lg text-gray-600">Subtitle goes here</h2>
      </div>
      <div className="flex mt-4 space-x-4 bg-gray-100/80 p-2 w-[60%] rounded-lg">
        <div className="flex items-center space-x-2">
          
        </div>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default Overview
