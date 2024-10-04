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
  },
  {
    id: 2,
    name: 'Product Launch Campaign',
    date: 'Oct 15, 2024',
    status: 'In Progress',
    openRate: '60%',
    clickRate: '40%',
  },
  {
    id: 3,
    name: 'Black Friday Campaign',
    date: 'Nov 1, 2024',
    status: 'Completed',
    openRate: '75%',
    clickRate: '50%',
  },
];

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
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-indigo-800">Campaigns</h1>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
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
              <option value="Scheduled">Scheduled</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="bg-white p-6 shadow-lg rounded-xl mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Campaign List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-indigo-50">
                <th className="py-3 px-4 font-semibold text-indigo-600">Name</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Date</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Status</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Open Rate</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Click Rate</th>
                <th className="py-3 px-4 font-semibold text-indigo-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign) => (
                <tr
                  key={campaign.id}
                  className="border-b border-indigo-100 hover:bg-indigo-50 transition-colors duration-200"
                  onClick={() => handleCampaignClick(campaign)}
                >
                  <td className="py-4 px-4 font-medium text-gray-800">{campaign.name}</td>
                  <td className="py-4 px-4 text-gray-600">{campaign.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      campaign.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{campaign.openRate}</td>
                  <td className="py-4 px-4 text-gray-600">{campaign.clickRate}</td>
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

      {/* Campaign Details */}
      {selectedCampaign && (
        <div className="bg-white p-6 shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center">
            <FiBarChart2 className="mr-2" /> {selectedCampaign.name} - Details
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">Date</p>
              <p className="text-xl font-semibold text-gray-800">{selectedCampaign.date}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">Status</p>
              <p className="text-xl font-semibold text-gray-800">{selectedCampaign.status}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">Open Rate</p>
              <p className="text-xl font-semibold text-gray-800">{selectedCampaign.openRate}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">Click Rate</p>
              <p className="text-xl font-semibold text-gray-800">{selectedCampaign.clickRate}</p>
            </div>
          </div>
          {/* More detailed statistics or actions can be added here */}
        </div>
      )}
    </div>
  );
};

export default Campaigns;
