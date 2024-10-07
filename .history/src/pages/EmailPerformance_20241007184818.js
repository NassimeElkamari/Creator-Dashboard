import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const geoUrl = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const EmailPerformance = () => {
  const [geographiesData, setGeographiesData] = useState([]);

  // Fetch geoJson data
  useEffect(() => {
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => setGeographiesData(data))
      .catch(err => console.error("Failed to load geography data:", err));
  }, []);

  const geographicData = [
    { country: 'USA', subscribers: 5000, coordinates: [-95, 38] },
    { country: 'Canada', subscribers: 2000, coordinates: [-106, 56] },
    { country: 'UK', subscribers: 1500, coordinates: [-3, 55] },
    { country: 'Australia', subscribers: 1000, coordinates: [133, -25] },
    { country: 'Germany', subscribers: 500, coordinates: [10, 51] },
  ];

  const pieChartData = {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Email Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Subscriber Map</h3>
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }}>
            {geographiesData && (
              <Geographies geography={geographiesData}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography 
                      key={geo.rsmKey} 
                      geography={geo} 
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                    />
                  ))
                }
              </Geographies>
            )}
            {geographicData.map(({ country, subscribers, coordinates }) => (
              <Marker key={country} coordinates={coordinates}>
                <circle r={Math.sqrt(subscribers) / 50} fill="#F00" stroke="#fff" strokeWidth={2} />
                <text textAnchor="middle" y={-10} style={{ fontSize: '8px', fill: '#000' }}>
                  {country}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Subscriber Distribution</h3>
          <Pie data={pieChartData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          }} />
        </div>
      </div>
    </div>
  );
};

export default EmailPerformance;
