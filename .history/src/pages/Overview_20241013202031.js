import React, { useState } from 'react'
import Header from '../components/OverviewHeader'

const Overview = () => {



  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex-1 overflow-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
}


export default Overview
