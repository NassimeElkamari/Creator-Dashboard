import React from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaEnvelope, FaUsers, FaChartLine, FaCalendar } from 'react-icons/fa';

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
    <div className="p-8 min-h-screen  dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 border-b pb-4 border-gray-300 dark:border-gray-700">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<FaEnvelope />} title="Total Campaigns" value="24" change="+3" />
        <StatCard icon={<FaUsers />} title="Active Subscribers" value="1,234" change="+56" />
        <StatCard icon={<FaChartLine />} title="Avg. Open Rate" value="45%" change="+2.5%" />
        <StatCard icon={<FaCalendar />} title="Upcoming Campaigns" value="2" change="0" />
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
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
      <div className="text-blue-500 dark:text-blue-400 text-3xl">{icon}</div>
      <div className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-500 dark:text-green-400' : change === '0' ? 'text-yellow-500 dark:text-yellow-400' : 'text-red-500 dark:text-red-400'}`}>
        {change !== '0' ? change : 'No change'}
      </div>
    </div>
    <h3 className="text-gray-600 dark:text-gray-400 font-medium mb-2">{title}</h3>
    <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
  </div>
);

const ChartCard = ({ title, chart }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{title}</h2>
    {chart}
  </div>
);

const UpcomingCampaigns = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Upcoming Campaigns</h2>
    <div className="space-y-4">
      <CampaignItem title="Newsletter Campaign" date="15th Oct 2024" />
      <CampaignItem title="Product Launch Campaign" date="25th Oct 2024" />
    </div>
  </div>
);

const CampaignItem = ({ title, date }) => (
  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300">
    <div>
      <p className="font-semibold text-gray-800 dark:text-gray-200">{title}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Scheduled: {date}</p>
    </div>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700">
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
