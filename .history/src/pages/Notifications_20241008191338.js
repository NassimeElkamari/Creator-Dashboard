import React, { useState, useEffect } from 'react';

function Notifications() {
  const [activeTab, setActiveTab] = useState('list');
  const [notifications, setNotifications] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    recipient: 'all',
    type: 'email',
    priority: 'normal',
    scheduleTime: '',
  });
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // Fetch notifications from API
    // This is a placeholder. Replace with actual API call
    setNotifications([
      { id: 1, title: 'Welcome', message: 'Welcome to our platform', recipient: 'all', status: 'sent', type: 'email', sentDateTime: '2023-06-01 10:00:00' },
      { id: 2, title: 'New Feature', message: 'Check out our new feature', recipient: 'subscribers', status: 'scheduled', type: 'push', sentDateTime: '2023-06-15 14:00:00' },
    ]);

    // Fetch templates from API
    // This is a placeholder. Replace with actual API call
    setTemplates([
      { id: 1, name: 'Welcome Email', content: 'Welcome to our platform!' },
      { id: 2, name: 'New Feature Announcement', content: 'We have a new feature to announce!' },
    ]);
  }, []);

  const filteredNotifications = notifications.filter(notification => {
    return (
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.status ? notification.status === filters.status : true) &&
      (filters.type ? notification.type === filters.type : true)
    );
  });

  const handleCreateNotification = (e) => {
    e.preventDefault();
    // API call to create notification
    console.log('Creating notification:', newNotification);
    // Reset form after submission
    setNewNotification({
      title: '',
      message: '',
      recipient: 'all',
      type: 'email',
      priority: 'normal',
      scheduleTime: '',
    });
  };

  const handleSaveTemplate = () => {
    const templateName = prompt('Enter a name for this template:');
    if (templateName) {
      setTemplates([...templates, { id: Date.now(), name: templateName, content: newNotification.message }]);
    }
  };

  const handleLoadTemplate = (template) => {
    setNewNotification(prev => ({ ...prev, message: template.content }));
  };

  return (
    <div className="notifications-page">
      <h1>Notifications Management</h1>
      
      <nav>
        <button onClick={() => setActiveTab('list')}>Notification List</button>
        <button onClick={() => setActiveTab('create')}>Create Notification</button>
        <button onClick={() => setActiveTab('templates')}>Templates</button>
      </nav>

      {activeTab === 'list' && (
        <>
          <FilterSearch 
            onFilterChange={setFilters} 
            onSearchChange={setSearchQuery}
          />
          <NotificationList 
            notifications={filteredNotifications}
          />
        </>
      )}

      {activeTab === 'create' && (
        <CreateNotification 
          notification={newNotification}
          onChange={setNewNotification}
          onSubmit={handleCreateNotification}
          onSaveTemplate={handleSaveTemplate}
        />
      )}

      {activeTab === 'templates' && (
        <NotificationTemplates 
          templates={templates}
          onLoadTemplate={handleLoadTemplate}
        />
      )}
    </div>
  );
}

function FilterSearch({ onFilterChange, onSearchChange }) {
  return (
    <div className="filter-search">
      <input 
        type="text" 
        placeholder="Search notifications..." 
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select onChange={(e) => onFilterChange(prev => ({ ...prev, status: e.target.value }))}>
        <option value="">All Statuses</option>
        <option value="sent">Sent</option>
        <option value="scheduled">Scheduled</option>
        <option value="failed">Failed</option>
      </select>
      <select onChange={(e) => onFilterChange(prev => ({ ...prev, type: e.target.value }))}>
        <option value="">All Types</option>
        <option value="email">Email</option>
        <option value="sms">SMS</option>
        <option value="push">Push</option>
      </select>
    </div>
  );
}

function NotificationList({ notifications }) {
  const handleView = (notification) => {
    console.log('Viewing notification:', notification);
  };

  const handleEdit = (notification) => {
    console.log('Editing notification:', notification);
  };

  const handleDelete = (notification) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      console.log('Deleting notification:', notification);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Message</th>
          <th>Recipient</th>
          <th>Status</th>
          <th>Type</th>
          <th>Date/Time Sent</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notifications.map(notification => (
          <tr key={notification.id}>
            <td>{notification.title}</td>
            <td>{notification.message}</td>
            <td>{notification.recipient}</td>
            <td>{notification.status}</td>
            <td>{notification.type}</td>
            <td>{notification.sentDateTime}</td>
            <td>
              <button onClick={() => handleView(notification)}>View</button>
              <button onClick={() => handleEdit(notification)}>Edit</button>
              <button onClick={() => handleDelete(notification)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CreateNotification({ notification, onChange, onSubmit, onSaveTemplate }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={notification.title}
        onChange={(e) => onChange({ ...notification, title: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={notification.message}
        onChange={(e) => onChange({ ...notification, message: e.target.value })}
      />
      <select
        value={notification.recipient}
        onChange={(e) => onChange({ ...notification, recipient: e.target.value })}
      >
        <option value="all">All Users</option>
        <option value="specific">Specific User</option>
        <option value="group">User Group</option>
      </select>
      <select
        value={notification.type}
        onChange={(e) => onChange({ ...notification, type: e.target.value })}
      >
        <option value="email">Email</option>
        <option value="push">Push Notification</option>
        <option value="sms">SMS</option>
      </select>
      <select
        value={notification.priority}
        onChange={(e) => onChange({ ...notification, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <input
        type="datetime-local"
        value={notification.scheduleTime}
        onChange={(e) => onChange({ ...notification, scheduleTime: e.target.value })}
      />
      <button type="submit">Send Now</button>
      <button type="button" onClick={onSaveTemplate}>Save as Template</button>
    </form>
  );
}

function NotificationTemplates({ templates, onLoadTemplate }) {
  return (
    <div>
      <h2>Notification Templates</h2>
      {templates.map(template => (
        <div key={template.id}>
          <h3>{template.name}</h3>
          <p>{template.content}</p>
          <button onClick={() => onLoadTemplate(template)}>Load Template</button>
        </div>
      ))}
    </div>
  );
}

export default Notifications;