import React, { useState } from 'react';
import NotificationList from '../components/NotificationList';
import CreateNotification from '../components/CreateNotification';
import NotificationTemplates from '../components/NotificationTemplates';
import FilterSearch from '../components/FilterSearch';

function Notifications() {
  const [activeTab, setActiveTab] = useState('list');
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="notifications-page">
      <h1>Notifications Management</h1>
      
      <nav>
        <button onClick={() => setActiveTab('list')}>Notification List</button>
        <button onClick={() => setActiveTab('create')}>Create Notification</button>
        <button onClick={() => setActiveTab('templates')}>Templates</button>
      </nav>

      <FilterSearch 
        onFilterChange={setFilters} 
        onSearchChange={setSearchQuery}
      />

      {activeTab === 'list' && (
        <NotificationList 
          filters={filters} 
          searchQuery={searchQuery} 
        />
      )}

      {activeTab === 'create' && (
        <CreateNotification />
      )}

      {activeTab === 'templates' && (
        <NotificationTemplates />
      )}
    </div>
  );
}

export default Notifications;
