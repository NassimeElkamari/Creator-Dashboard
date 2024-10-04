import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  // Sample Data for Charts
  const campaignData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Campaigns Created',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
      },
    ],
  };

  const subscriberData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [300, 100],
        backgroundColor: ['#4A90E2', '#F5F5F5'],
        hoverBackgroundColor: ['#357ABD', '#E0E0E0'],
      },
    ],
  };

  const emailPerformanceData = {
    labels: ['Open Rate', 'Click Rate'],
    datasets: [
      {
        label: 'Email Performance',
        data: [45, 30],
        backgroundColor: ['#4A90E2', '#4AE2A5'],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Campaigns Overview */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Campaigns Overview</h2>
          <Line data={campaignData} />
        </div>

        {/* Subscriber Insights */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Subscriber Insights</h2>
          <Doughnut data={subscriberData} />
        </div>

        {/* Email Performance */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Email Performance</h2>
          <Bar data={emailPerformanceData} />
        </div>
      </div>

      {/* Upcoming Campaigns */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Campaigns</h2>
        <div className="flex justify-between text-gray-600">
          <div>
            <p className="font-semibold">Newsletter Campaign</p>
            <p>Scheduled: 15th Oct 2024</p>
          </div>
          <div>
            <p className="font-semibold">Product Launch Campaign</p>
            <p>Scheduled: 25th Oct 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
