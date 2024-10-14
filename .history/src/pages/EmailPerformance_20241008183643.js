import React from 'react';
import { FaLink, FaMousePointer } from 'react-icons/fa';

const EmailPerformance = () => {
  // Static data for campaign summary
  const campaignSummary = [
    { name: 'Summer Sale', sentDate: '2023-06-01', recipients: 10000, openRate: 25, ctr: 3.5, bounceRate: 0.5, unsubscribeRate: 0.1 },
    { name: 'Back to School', sentDate: '2023-08-15', recipients: 15000, openRate: 22, ctr: 3.2, bounceRate: 0.3, unsubscribeRate: 0.2 },
    { name: 'Black Friday', sentDate: '2023-11-24', recipients: 20000, openRate: 30, ctr: 4.5, bounceRate: 0.4, unsubscribeRate: 0.1 },
  ];

  // Static data for top links clicked
  const topLinksData = [
    { url: '/summer-sale', clicks: 1500 },
    { url: '/new-arrivals', clicks: 1200 },
    { url: '/clearance', clicks: 800 },
    { url: '/customer-support', clicks: 500 },
    { url: '/about-us', clicks: 300 },
  ];

  return (
    <div className="container mx-auto px-4 py-8   text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-center">Email Performance Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Campaign Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="p-2 border border-gray-300 dark:border-gray-600">Name</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600">Sent Date</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600">Recipients</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600">Open Rate (%)</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600">CTR (%)</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600">Bounce Rate (%)</th>
                <th className="p-2 border border-gray-300 dark:border-gray-600">Unsubscribe Rate (%)</th>
              </tr>
            </thead>
            <tbody>
              {campaignSummary.map((campaign, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.name}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.sentDate}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.recipients}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.openRate}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.ctr}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.bounceRate}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-600">{campaign.unsubscribeRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Engagement Breakdown</h2>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Top Links Clicked</h3>
          <ul className="space-y-2">
            {topLinksData.map((link, index) => (
              <li key={index} className="flex items-center p-2 bg-gray-100 dark:bg-gray-600 rounded">
                <FaLink className="mr-2 text-blue-500" />
                <span className="flex-grow">{link.url}</span>
                <span className="flex items-center">
                  <FaMousePointer className="mr-1 text-green-500" />
                  {link.clicks}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailPerformance;