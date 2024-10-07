import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Table } from 'react-bootstrap';

ChartJS.register(...registerables);

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
    { country: 'USA', subscribers: 5000 },
    { country: 'Canada', subscribers: 2000 },
    { country: 'UK', subscribers: 1500 },
    { country: 'Australia', subscribers: 1000 },
    { country: 'Germany', subscribers: 500 },
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

  return (
    <div>
      <h1>Email Performance</h1>
      
      <section>
        <h2>Campaign Overview</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sent Date</th>
              <th>Recipients</th>
              <th>Open Rate (%)</th>
              <th>CTR (%)</th>
              <th>Bounce Rate (%)</th>
              <th>Unsubscribe Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {campaignSummary.map((campaign, index) => (
              <tr key={index}>
                <td>{campaign.name}</td>
                <td>{campaign.sentDate}</td>
                <td>{campaign.recipients}</td>
                <td>{campaign.openRate}</td>
                <td>{campaign.ctr}</td>
                <td>{campaign.bounceRate}</td>
                <td>{campaign.unsubscribeRate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>

      <section>
        <h2>Detailed Metrics</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%' }}>
            <h3>Open Rate over Time</h3>
            <Line data={lineChartData} />
          </div>
          <div style={{ width: '45%' }}>
            <h3>Click-Through Rate over Time</h3>
            <Bar data={barChartData} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '45%' }}>
            <h3>Geographic Distribution</h3>
            <ComposableMap>
              <Geographies geography="/path/to/world-110m.json">
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
          <div style={{ width: '45%' }}>
            <h3>Device Type Breakdown</h3>
            <Pie data={pieChartData} />
          </div>
        </div>
      </section>

      <section>
        <h2>Engagement Breakdown</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%' }}>
            <h3>Top Links Clicked</h3>
            <ul>
              {topLinksData.map((link, index) => (
                <li key={index}>{link.url}: {link.clicks} clicks</li>
              ))}
            </ul>
          </div>
          <div style={{ width: '45%' }}>
            <h3>Email Heatmap</h3>
            <p>Heatmap visualization not implemented in this example.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Subscriber Segments</h2>
        <p>Segment filter not implemented in this example.</p>
      </section>

      <section>
        <h2>Campaign Comparison</h2>
        <p>Campaign comparison not implemented in this example.</p>
      </section>
    </div>
  );
};

export default EmailPerformance;
