import React, { useState } from 'react'
import Header from '../components/OverviewHeader'
import Compose_compaign from '../components/Compose_compaign'

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

// Placeholder components for each section
const ComposeSection = () => <Compose_compaign />
const AudienceSection = () => <div>Audience Section</div>
const EmailSection = () => <div>Email Section</div>
const WebSection = () => <div>Web Section</div>
const ReviewSection = () => <div>Review Section</div>

export default Overview