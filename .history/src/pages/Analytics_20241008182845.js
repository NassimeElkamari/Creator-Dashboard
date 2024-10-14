import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl ="https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

ChartJS.register(...registerables);

const Analytics = () => {
  // Move chart data from EmailPerformance
  const timeSeriesData = [
    { date: '2023-06-01', openRate: 25, ctr: 3.5 },
    { date: '2023-07-01', openRate: 23, ctr: 3.2 },
    { date: '2023-08-01', openRate: 22, ctr: 3.0 },
    { date: '2023-09-01', openRate: 24, ctr: 3.3 },
    { date: '2023-10-01', openRate: 26, ctr: 3.7 },
    { date: '2023-11-01', openRate: 30, ctr: 4.5 },
  ];

  const deviceTypeData = [
    { device: 'Mobile', percentage: 60 },
    { device: 'Desktop', percentage: 30 },
    { device: 'Tablet', percentage: 10 },
  ];

  const geographicData = [
    { country: 'USA', subscribers: 5000, coordinates: [-95, 38] },
    { country: 'Canada', subscribers: 2000, coordinates: [-106, 56] },
    { country: 'UK', subscribers: 1500, coordinates: [-3, 55] },
    { country: 'Australia', subscribers: 1000, coordinates: [133, -25] },
    { country: 'Germany', subscribers: 500, coordinates: [10, 51] },
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
    <div className="container mx-auto px-4 py-8 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-center">Analytics Dashboard</h1>
      
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
        <h2 className="text-2xl font-semibold mb-4">Engagement Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Device Type Breakdown</h3>
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
      </div>
    </div>
  );
};

export default Analytics;
