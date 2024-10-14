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
    <div className=" bg-white dark:bg-gray-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Notifications Management</h1>
      
      <nav className="flex mb-6 space-x-4">
        <button 
          onClick={() => setActiveTab('list')} 
          className={`px-4 py-2 rounded ${activeTab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`}
        >
          Notification List
        </button>
        <button 
          onClick={() => setActiveTab('create')} 
          className={`px-4 py-2 rounded ${activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`}
        >
          Create Notification
        </button>
        <button 
          onClick={() => setActiveTab('templates')} 
          className={`px-4 py-2 rounded ${activeTab === 'templates' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'}`}
        >
          Templates
        </button>
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
    <div className="filter-search flex space-x-4 mb-6">
      <input 
        type="text" 
        placeholder="Search notifications..." 
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-grow px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <select 
        onChange={(e) => onFilterChange(prev => ({ ...prev, status: e.target.value }))}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        <option value="">All Statuses</option>
        <option value="sent">Sent</option>
        <option value="scheduled">Scheduled</option>
        <option value="failed">Failed</option>
      </select>
      <select 
        onChange={(e) => onFilterChange(prev => ({ ...prev, type: e.target.value }))}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      >
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
    <div className="">
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Message</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Recipient</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date/Time Sent</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map(notification => (
            <tr key={notification.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{notification.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{notification.message}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{notification.recipient}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{notification.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{notification.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{notification.sentDateTime}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleView(notification)} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-2">View</button>
                <button onClick={() => handleEdit(notification)} className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 mr-2">Edit</button>
                <button onClick={() => handleDelete(notification)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CreateNotification({ notification, onChange, onSubmit, onSaveTemplate }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={notification.title}
        onChange={(e) => onChange({ ...notification, title: e.target.value })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <textarea
        placeholder="Message"
        value={notification.message}
        onChange={(e) => onChange({ ...notification, message: e.target.value })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <select
        value={notification.recipient}
        onChange={(e) => onChange({ ...notification, recipient: e.target.value })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        <option value="all">All Users</option>
        <option value="specific">Specific User</option>
        <option value="group">User Group</option>
      </select>
      <select
        value={notification.type}
        onChange={(e) => onChange({ ...notification, type: e.target.value })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        <option value="email">Email</option>
        <option value="push">Push Notification</option>
        <option value="sms">SMS</option>
      </select>
      <select
        value={notification.priority}
        onChange={(e) => onChange({ ...notification, priority: e.target.value })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <input
        type="datetime-local"
        value={notification.scheduleTime}
        onChange={(e) => onChange({ ...notification, scheduleTime: e.target.value })}
        className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <div className="flex space-x-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Now</button>
        <button type="button" onClick={onSaveTemplate} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save as Template</button>
      </div>
    </form>
  );
}

function NotificationTemplates({ templates, onLoadTemplate }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notification Templates</h2>
      {templates.map(template => (
        <div key={template.id} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{template.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{template.content}</p>
          <button 
            onClick={() => onLoadTemplate(template)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load Template
          </button>
        </div>
      ))}
    </div>
  );
}

export default Notifications;