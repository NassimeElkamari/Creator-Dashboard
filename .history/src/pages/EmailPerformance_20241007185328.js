import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

ChartJS.register(...registerables);

const geoUrl ="https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const EmailPerformance = () => {
  // Static data for campaign summary
  const campaignSummary = [
    { name: 'Summer Sale', sentDate: '2023-06-01', recipients: 10000, openRate: 25, ctr: 3.5, bounceRate: 0.5, unsubscribeRate: 0.1 },
    { name: 'Back to School', sentDate: '2023-08-15', recipients: 15000, openRate: 22, ctr: 3.2, bounceRate: 0.3, unsubscribeRate: 0.2 },
    { name: 'Black Friday', sentDate: '2023-11-24', recipients: 20000, openRate: 30, ctr: 4.5, bounceRate: 0.4, unsubscribeRate: 0.1 },
  ];

  // Static data for time series charts
  const timeSeriesData = [
    { date: '2023-06-01', openRate: 25, ctr: 3.5 },
    { date: '2023-07-01', openRate: 23, ctr: 3.2 },
    { date: '2023-08-01', openRate: 22, ctr: 3.0 },
    { date: '2023-09-01', openRate: 24, ctr: 3.3 },
    { date: '2023-10-01', openRate: 26, ctr: 3.7 },
    { date: '2023-11-01', openRate: 30, ctr: 4.5 },
  ];

  // Static data for geographic distribution
  const geographicData = [
    { country: 'USA', subscribers: 5000, coordinates: [-95, 38] },
    { country: 'Canada', subscribers: 2000, coordinates: [-106, 56] },
    { country: 'UK', subscribers: 1500, coordinates: [-3, 55] },
    { country: 'Australia', subscribers: 1000, coordinates: [133, -25] },
    { country: 'Germany', subscribers: 500, coordinates: [10, 51] },
  ];

  // Static data for device type breakdown
  const deviceTypeData = [
    { device: 'Mobile', percentage: 60 },
    { device: 'Desktop', percentage: 30 },
    { device: 'Tablet', percentage: 10 },
  ];

  // Static data for top links clicked
  const topLinksData = [
    { url: '/summer-sale', clicks: 1500 },
    { url: '/new-arrivals', clicks: 1200 },
    { url: '/clearance', clicks: 800 },
    { url: '/customer-support', clicks: 500 },
    { url: '/about-us', clicks: 300 },
  ];

  // Static data for email heatmap
  const heatmapData = [
    { x: 0, y: 0, value: 10 },
    { x: 1, y: 0, value: 20 },
    { x: 2, y: 0, value: 30 },
    { x: 0, y: 1, value: 40 },
    { x: 1, y: 1, value: 50 },
    { x: 2, y: 1, value: 60 },
  ];

  const lineChartData = {
    labels: timeSeriesData.map(d => d.date),
    datasets: [
      {
        label: 'Open Rate',
        data: timeSeriesData.map(d => d.openRate),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const barChartData = {
    labels: timeSeriesData.map(d => d.date),
    datasets: [
      {
        label: 'Click-Through Rate',
        data: timeSeriesData.map(d => d.ctr),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ]
  };

  const pieChartData = {
    labels: deviceTypeData.map(d => d.device),
    datasets: [
      {
        data: deviceTypeData.map(d => d.percentage),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      }
    ]
  };

  const geoChartData = {
    labels: geographicData.map(d => d.country),
    datasets: [
      {
        data: geographicData.map(d => d.subscribers),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'currentColor',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'currentColor' },
        grid: { color: 'rgba(200, 200, 200, 0.2)' },
      },
      y: {
        ticks: { color: 'currentColor' },
        grid: { color: 'rgba(200, 200, 200, 0.2)' },
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8  dark:bg-gray-800  text-gray-800 dark:text-gray-200">
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
        <h2 className="text-2xl font-semibold mb-4">Detailed Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Open Rate over Time</h3>
            <div className="h-64">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Click-Through Rate over Time</h3>
            <div className="h-64">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Geographic Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Subscriber Map</h3>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 100,
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
              {geographicData.map(({ country, coordinates, subscribers }) => (
                <Marker key={country} coordinates={coordinates}>
                  <circle r={Math.sqrt(subscribers) / 50} fill="#F00" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={Math.sqrt(subscribers) / 50 + 10}
                    style={{ fontSize: '8px', fill: '#333' }}
                  >
                    {subscribers}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Subscriber Distribution</h3>
            <div className="h-64">
              <Pie data={geoChartData} options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    ...chartOptions.plugins.legend,
                    position: 'bottom'
                  }
                }
              }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Device Type Breakdown</h2>
        <div className="w-full md:w-1/3 mx-auto">
          <div className="h-64">
            <Pie data={pieChartData} options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                legend: {
                  ...chartOptions.plugins.legend,
                  position: 'bottom'
                }
              }
            }} />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Engagement Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Top Links Clicked</h3>
            <ul className="list-unstyled">
              {topLinksData.map((link, index) => (
                <li key={index}>{link.url}: {link.clicks} clicks</li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Email Heatmap</h3>
            <div className="heatmap-grid">
              {heatmapData.map((cell, index) => (
                <div
                  key={index}
                  className="heatmap-cell"
                  style={{
                    backgroundColor: `rgba(255, 0, 0, ${cell.value / 100})`,
                  }}
                >
                  {cell.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EmailPerformance;