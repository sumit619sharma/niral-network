import React, { useState, useEffect } from 'react';
import LogOut from './LogOut';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
        const data = await response.json();
        setPortfolioData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="container mt-4 col-md-9">
    <div className='d-flex justify-content-between'>
      <h2 className="mb-4">My Photo Portfolio</h2>
      <LogOut/>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        
        <div className='d-flex flex-wrap justify-content-center align-items-center text-center m-auto ' >
          {portfolioData.map((item) => (
            <div key={item.id} className="col-md-5  m-4">
              <img src={item.url} alt={item.title} style={{ maxWidth: '400px',maxHeight: '400px' }}  className="img-fluid rounded" />
              <h3 className="mt-2">{item.title}</h3>
              <p>{item.thumbnailUrl}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Portfolio;
