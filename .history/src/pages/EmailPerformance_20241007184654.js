import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

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
  ];

  return (
    <div>
      <h2>Email Performance</h2>
      <ComposableMap>
        {geographiesData && (
          <Geographies geography={geographiesData}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        )}
        {geographicData.map(({ country, subscribers, coordinates }) => (
          <Marker key={country} coordinates={coordinates}>
            <circle r={10} fill="white" />
            <text textAnchor="middle" fill="#000">
              {subscribers}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default EmailPerformance;
