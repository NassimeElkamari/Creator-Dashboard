import React, { useState } from 'react';

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

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Campaigns</h1>

      {/* Campaign List */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Campaign List</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Open Rate</th>
              <th className="py-2 px-4">Click Rate</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaignsData.map((campaign) => (
              <tr
                key={campaign.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => handleCampaignClick(campaign)}
              >
                <td className="py-2 px-4">{campaign.name}</td>
                <td className="py-2 px-4">{campaign.date}</td>
                <td className="py-2 px-4">{campaign.status}</td>
                <td className="py-2 px-4">{campaign.openRate}</td>
                <td className="py-2 px-4">{campaign.clickRate}</td>
                <td className="py-2 px-4">
                  <button className="text-blue-500 hover:text-blue-700">View</button>
                  <button className="ml-4 text-green-500 hover:text-green-700">Edit</button>
                  <button className="ml-4 text-red-500 hover:text-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Campaign Details */}
      {selectedCampaign && (
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {selectedCampaign.name} - Details
          </h2>
          <p><strong>Date:</strong> {selectedCampaign.date}</p>
          <p><strong>Status:</strong> {selectedCampaign.status}</p>
          <p><strong>Open Rate:</strong> {selectedCampaign.openRate}</p>
          <p><strong>Click Rate:</strong> {selectedCampaign.clickRate}</p>
          {/* More detailed statistics or actions */}
        </div>
      )}
    </div>
  );
};

export default Campaigns;
