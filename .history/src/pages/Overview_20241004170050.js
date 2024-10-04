import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaEnvelope, FaUsers, FaChartLine } from 'react-icons/fa';

const Overview = () => {
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
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<FaEnvelope />} title="Total Campaigns" value="24" change="+3" />
        <StatCard icon={<FaUsers />} title="Active Subscribers" value="1,234" change="+56" />
        <StatCard icon={<FaChartLine />} title="Avg. Open Rate" value="45%" change="+2.5%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChartCard title="Campaigns Overview" chart={<Line data={campaignData} options={lineOptions} />} />
        <ChartCard title="Subscriber Insights" chart={<Doughnut data={subscriberData} options={doughnutOptions} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title="Email Performance" chart={<Bar data={emailPerformanceData} options={barOptions} />} />
        <UpcomingCampaigns />
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="text-blue-500 text-2xl">{icon}</div>
      <div className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</div>
    </div>
    <h3 className="text-gray-600 font-medium mb-2">{title}</h3>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
);

const ChartCard = ({ title, chart }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    {chart}
  </div>
);

const UpcomingCampaigns = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Campaigns</h2>
    <div className="space-y-4">
      <CampaignItem title="Newsletter Campaign" date="15th Oct 2024" />
      <CampaignItem title="Product Launch Campaign" date="25th Oct 2024" />
    </div>
  </div>
);

const CampaignItem = ({ title, date }) => (
  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <p className="text-sm text-gray-600">Scheduled: {date}</p>
    </div>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      View Details
    </button>
  </div>
);

// Chart options
const lineOptions = {
  // ... add line chart options ...
};

const doughnutOptions = {
  // ... add doughnut chart options ...
};

const barOptions = {
  // ... add bar chart options ...
};

export default Overview;
