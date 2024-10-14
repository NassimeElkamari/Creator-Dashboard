import React from 'react';

const StatCard = ({ title, value, subtitle, percentage, icon, className }) => (
  <div className={`bg-white shadow-md p-3 flex items-center ${className}`}>
    <div className="mr-4 text-blue-500 text-3xl">{icon}</div>
    <div>
      <h3 className="text-black text-sm font-medium">{title}</h3>
      <div className="flex items-center gap-10">
        <p className="text-2xl font-bold mr-2">{value}</p>
        <span className="text-sm text-black bg-green-200 rounded-xl px-2 py-1">+{percentage}%</span>
      </div>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const OverviewComponent = () => {
  return (
    <div className="py-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl">
        <StatCard
          title="Active Subscribers"
          value="10,234"
          subtitle="from 0 (last 4 weeks)"
          className="rounded-l-xl border border-r-gray-300"
          percentage="5.3"
          icon={<i className="fas fa-users"></i>}
        />
        <StatCard
          title="Open Rate"
          value="68.7%"
          subtitle="from 0 (last 4 weeks)"
          percentage="2.1"
          className="border border-r-gray-300"
          icon={<i className="fas fa-envelope-open"></i>}
        />
        <StatCard
          title="Click Rate"
          value="42.3%"
          className="rounded-r-xl border border-l-gray-300"
          subtitle="from 0 (last 4 weeks)"
          percentage="1.8"
          icon={<i className="fas fa-mouse-pointer"></i>}
        />
      </div>
    </div>
  );
};

export default OverviewComponent;
