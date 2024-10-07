import React from 'react';
import { 
  Table, Card, Row, Col, Chart, Map, 
  PieChart, List, Heatmap, SegmentFilter, 
  CampaignComparison 
} from '../components'; // Assume these components exist

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

  return (
    <div>
      <h1>Email Performance</h1>
      
      <section>
        <h2>Campaign Overview</h2>
        <Table data={campaignSummary} />
      </section>

      <section>
        <h2>Detailed Metrics</h2>
        <Row>
          <Col>
            <Card title="Open Rate over Time">
              <Chart type="line" data={timeSeriesData} xKey="date" yKey="openRate" />
            </Card>
          </Col>
          <Col>
            <Card title="Click-Through Rate over Time">
              <Chart type="bar" data={timeSeriesData} xKey="date" yKey="ctr" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card title="Geographic Distribution">
              <Map data={geographicData} />
            </Card>
          </Col>
          <Col>
            <Card title="Device Type Breakdown">
              <PieChart data={deviceTypeData} />
            </Card>
          </Col>
        </Row>
      </section>

      <section>
        <h2>Engagement Breakdown</h2>
        <Row>
          <Col>
            <Card title="Top Links Clicked">
              <List items={topLinksData} />
            </Card>
          </Col>
          <Col>
            <Card title="Email Heatmap">
              <Heatmap data={heatmapData} />
            </Card>
          </Col>
        </Row>
      </section>

      <section>
        <h2>Subscriber Segments</h2>
        <SegmentFilter />
        {/* Display segmented metrics here */}
      </section>

      <section>
        <h2>Campaign Comparison</h2>
        <CampaignComparison campaigns={campaignSummary} />
      </section>
    </div>
  );
};

export default EmailPerformance;
