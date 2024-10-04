import React, { useState, useEffect } from 'react';
import { FiSearch, FiEdit2, FiTrash2, FiEye, FiFilter, FiUsers, FiUserCheck, FiUserMinus, FiUserPlus } from 'react-icons/fi';

const subscribersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', subscriptionDate: 'Oct 2, 2024', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', subscriptionDate: 'Feb 20, 2024', status: 'Unsubscribed' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', subscriptionDate: 'Mar 5, 2024', status: 'Active' },
  // ...more data
];

const Subscribers = () => {
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [filteredSubscribers, setFilteredSubscribers] = useState(subscribersData);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    unsubscribed: 0,
    newThisWeek: 0
  });

  useEffect(() => {
    const filtered = subscribersData.filter(subscriber => 
      subscriber.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'All' || subscriber.status === statusFilter)
    );
    setFilteredSubscribers(filtered);

    // Calculate stats
    const total = subscribersData.length;
    const active = subscribersData.filter(sub => sub.status === 'Active').length;
    const unsubscribed = subscribersData.filter(sub => sub.status === 'Unsubscribed').length;
    
    // Calculate new subscribers this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const newThisWeek = subscribersData.filter(sub => new Date(sub.subscriptionDate) > oneWeekAgo).length;
    
    setStats({ total, active, unsubscribed, newThisWeek });
  }, [searchTerm, statusFilter]);

  const handleSubscriberClick = (subscriber) => {
    setSelectedSubscriber(subscriber);
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Subscribers</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <FiUsers className="text-3xl text-indigo-500 mr-4" />
          <div>
            <p className="text-sm text-gray-500">Total Subscribers</p>
            <p className="text-2xl font-semibold text-gray-800">{stats.total}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <FiUserCheck className="text-3xl text-green-500 mr-4" />
          <div>
            <p className="text-sm text-gray-500">Active Subscribers</p>
            <p className="text-2xl font-semibold text-gray-800">{stats.active}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <FiUserMinus className="text-3xl text-red-500 mr-4" />
          <div>
            <p className="text-sm text-gray-500">Unsubscribed</p>
            <p className="text-2xl font-semibold text-gray-800">{stats.unsubscribed}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <FiUserPlus className="text-3xl text-blue-500 mr-4" />
          <div>
            <p className="text-sm text-gray-500">New This Week</p>
            <p className="text-2xl font-semibold text-gray-800">{stats.newThisWeek}</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search subscribers..."
              className="border border-indigo-200 rounded-md pl-10 pr-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <FiFilter className="text-indigo-500 mr-2" />
          <select
            className="border border-indigo-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Unsubscribed">Unsubscribed</option>
          </select>
        </div>
      </div>

      {/* Subscriber List */}
      <div className="bg-white p-6 shadow-lg rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Subscriber List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-50">
                <th className="py-3 px-4 font-semibold text-indigo-600">Name</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Email</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Subscription Date</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Status</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubscribers.map((subscriber) => (
                <tr
                  key={subscriber.id}
                  className="border-b border-indigo-100 hover:bg-indigo-50 transition-colors duration-200"
                  onClick={() => handleSubscriberClick(subscriber)}
                >
                  <td className="py-4 px-4 font-medium text-gray-800">{subscriber.name}</td>
                  <td className="py-4 px-4 text-gray-600">{subscriber.email}</td>
                  <td className="py-4 px-4 text-gray-600">{subscriber.subscriptionDate}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      subscriber.status === 'Active' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-3" title="View">
                      <FiEye size={18} />
                    </button>
                    <button className="text-green-500 hover:text-green-700 mr-3" title="Edit">
                      <FiEdit2 size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700" title="Delete">
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subscriber Details */}
      {selectedSubscriber && (
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
            Subscriber: {selectedSubscriber.name}
          </h2>
          <p><strong>Email:</strong> {selectedSubscriber.email}</p>
          <p><strong>Subscription Date:</strong> {selectedSubscriber.subscriptionDate}</p>
          <p><strong>Status:</strong> {selectedSubscriber.status}</p>
        </div>
      )}
    </div>
  );
};

export default Subscribers;