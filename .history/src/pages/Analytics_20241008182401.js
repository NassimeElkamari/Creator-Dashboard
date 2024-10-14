import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const sampleData = [
  // Sample data for demonstration purposes
  { name: 'Campaign 1', openRate: 70, clickRate: 50, conversionRate: 30 },
  { name: 'Campaign 2', openRate: 80, clickRate: 60, conversionRate: 40 },
  // Add more data as needed
];

const Analytics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Analytics</h1>
      
      {/* Top KPIs */}
      <div className="kpi-section">
        <h2>Total Campaigns Sent: 10</h2>
        <h2>Total Subscribers: 5000</h2>
        <h2>Overall Engagement Rate: 65%</h2>
        <h2>New Subscribers in the Last Month: 200</h2>
        <h2>Unsubscribes in the Last Month: 50</h2>
      </div>

      {/* Graphs and Charts */}
      <div className="charts-section">
        <h2>Subscriber Growth</h2>
        <LineChart width={600} height={300} data={sampleData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="openRate" stroke="#8884d8" />
          <Line type="monotone" dataKey="clickRate" stroke="#82ca9d" />
        </LineChart>

        <h2>Top Performing Campaigns</h2>
        <BarChart width={600} height={300} data={sampleData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Bar dataKey="conversionRate" fill="#8884d8" />
        </BarChart>

        <h2>Subscriber Locations</h2>
        <PieChart width={400} height={400}>
          <Pie data={sampleData} dataKey="conversionRate" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Tooltip />
        </PieChart>
      </div>

      {/* Detailed Lists */}
      <div className="lists-section">
        <h2>Recent Subscriber Activity</h2>
        <ul>
          <li>Subscriber A signed up</li>
          <li>Subscriber B unsubscribed</li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
