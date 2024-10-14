import React from 'react';

const StatCard = ({ title, value, subtitle, percentage, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
    <div className="mr-4 text-blue-500 text-3xl">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
      <p className="text-sm text-green-500">+{percentage}%</p>
    </div>
  </div>
);

const OverviewComponent = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Active Subscribers"
          value="10,234"
          subtitle="Total active users"
          percentage="5.3"
          icon={<i className="fas fa-users"></i>}
        />
        <StatCard
          title="Open Rate"
          value="68.7%"
          subtitle="Emails opened"
          percentage="2.1"
          icon={<i className="fas fa-envelope-open"></i>}
        />
        <StatCard
          title="Click Rate"
          value="42.3%"
          subtitle="Links clicked"
          percentage="1.8"
          icon={<i className="fas fa-mouse-pointer"></i>}
        />
      </div>
    </div>
  );
};

export default OverviewComponent;
