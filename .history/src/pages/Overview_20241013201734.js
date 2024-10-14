import React, { useState } from 'react'
import Header from '../components/Header'
import Compose_compaign from '../components/Compose_compaign'

const NewCampaign = () => {
  const [selectedSection, setSelectedSection] = useState('compose')

  const renderContent = () => {
    switch (selectedSection) {
      case 'compose':
        return <ComposeSection />
      case 'audience':
        return <AudienceSection />
      case 'email':
        return <EmailSection />
      case 'web':
        return <WebSection />
      case 'review':
        return <ReviewSection />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header selectedSection={selectedSection} onSectionChange={setSelectedSection} />
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

export default NewCampaign
