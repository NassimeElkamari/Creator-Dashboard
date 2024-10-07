import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

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
    <Container fluid className="py-4">
      <h1 className="text-center mb-4">Email Performance Dashboard</h1>
      
      <Card className="mb-4">
        <Card.Header as="h2">Campaign Overview</Card.Header>
        <Card.Body>
          <Table responsive striped bordered hover>
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
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h2">Detailed Metrics</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header as="h3">Open Rate over Time</Card.Header>
                <Card.Body>
                  <Line data={lineChartData} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header as="h3">Click-Through Rate over Time</Card.Header>
                <Card.Body>
                  <Bar data={barChartData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header as="h3">Geographic Distribution</Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    {geographicData.map((item, index) => (
                      <li key={index}>{item.country}: {item.subscribers} subscribers</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header as="h3">Device Type Breakdown</Card.Header>
                <Card.Body>
                  <Pie data={pieChartData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header as="h2">Engagement Breakdown</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header as="h3">Top Links Clicked</Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    {topLinksData.map((link, index) => (
                      <li key={index}>{link.url}: {link.clicks} clicks</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Header as="h3">Email Heatmap</Card.Header>
                <Card.Body>
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
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header as="h2">Subscriber Segments</Card.Header>
            <Card.Body>
              <p>Segment filter not implemented in this example.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header as="h2">Campaign Comparison</Card.Header>
            <Card.Body>
              <p>Campaign comparison not implemented in this example.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailPerformance;