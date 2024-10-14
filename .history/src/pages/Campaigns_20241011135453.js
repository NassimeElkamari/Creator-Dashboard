import React, { useState, useEffect } from 'react';
import { FiEye, FiEdit2, FiTrash2, FiBarChart2, FiSearch, FiFilter } from 'react-icons/fi';

const campaignsData = [
  {
    id: 1,
    name: 'Newsletter Campaign',
    date: 'Oct 10, 2024',
    status: 'Scheduled',
    openRate: '45%',
    clickRate: '30%',
    owner: { id: 101, name: 'Alice' },
  },
  {
    id: 2,
    name: 'Product Launch Campaign',
    date: 'Oct 15, 2024',
    status: 'In Progress',
    openRate: '60%',
    clickRate: '40%',
    owner: { id: 102, name: 'Bob' },
  },
  {
    id: 3,
    name: 'Black Friday Campaign',
    date: 'Nov 1, 2024',
    status: 'Completed',
    openRate: '75%',
    clickRate: '50%',
    owner: { id: 103, name: 'Charlie' },
  },
];

const CampaignStats = () => {
  const totalCampaigns = campaignsData.length;
  const activeCampaigns = campaignsData.filter(c => c.status === 'In Progress').length;
  const averageOpenRate = (campaignsData.reduce((sum, c) => sum + parseFloat(c.openRate), 0) / totalCampaigns).toFixed(2);
  const averageClickRate = (campaignsData.reduce((sum, c) => sum + parseFloat(c.clickRate), 0) / totalCampaigns).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Campaigns</h3>
        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{totalCampaigns}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Active Campaigns</h3>
        <p className="text-3xl font-bold text-green-600 dark:text-green-400">{activeCampaigns}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Avg. Open Rate</h3>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{averageOpenRate}%</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Avg. Click Rate</h3>
        <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{averageClickRate}%</p>
      </div>
    </div>
  );
};

const Campaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaignsData);

  useEffect(() => {
    const filtered = campaignsData.filter(campaign => 
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'All' || campaign.status === statusFilter)
    );
    setFilteredCampaigns(filtered);
  }, [searchTerm, statusFilter]);

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Campaigns</h1>

      <CampaignStats />

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-800 rounded-md pl-10 pr-3 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 text-gray-800 dark:text-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center">
            <FiFilter className="text-indigo-500 dark:text-indigo-400 mr-2" />
            <select
              className="border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600 text-gray-800 dark:text-gray-200"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Scheduled">Scheduled</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6">Campaign List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-50 dark:bg-indigo-900">
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Name</th>
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Date</th>
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Status</th>
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Open Rate</th>
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Click Rate</th>
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Owner</th>
                <th className="py-3 px-4 font-semibold text-indigo-600 dark:text-indigo-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="border-b border-indigo-100 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors duration-200"
                  onClick={() => handleCampaignClick(campaign)}
                >
                  <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-200">{campaign.name}</td>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{campaign.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      campaign.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{campaign.openRate}</td>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{campaign.clickRate}</td>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{campaign.owner.name} (ID: {campaign.owner.id})</td>
                  <td className="py-4 px-4">
                    <button className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mr-3" title="View">
                      <FiEye size={18} />
                    </button>
                    <button className="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mr-3" title="Edit">
                      <FiEdit2 size={18} />
                    </button>
                    <button className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" title="Delete">
                      <FiTrash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Details */}
      {selectedCampaign && (
        <div className="bg-white dark:bg-gray-800 p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6 flex items-center">
            <FiBarChart2 className="mr-2 text-indigo-500 dark:text-indigo-400" /> {selectedCampaign.name} - Details
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <p className="text-indigo-600 dark:text-indigo-300 mb-2">Date</p>
              <p className="text-xl font-semibold text-indigo-800 dark:text-indigo-200">{selectedCampaign.date}</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <p className="text-indigo-600 dark:text-indigo-300 mb-2">Status</p>
              <p className="text-xl font-semibold text-indigo-800 dark:text-indigo-200">{selectedCampaign.status}</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <p className="text-indigo-600 dark:text-indigo-300 mb-2">Open Rate</p>
              <p className="text-xl font-semibold text-indigo-800 dark:text-indigo-200">{selectedCampaign.openRate}</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg">
              <p className="text-indigo-600 dark:text-indigo-300 mb-2">Click Rate</p>
              <p className="text-xl font-semibold text-indigo-800 dark:text-indigo-200">{selectedCampaign.clickRate}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;