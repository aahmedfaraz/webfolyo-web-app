import React from 'react';
import styles from "../pages/css/services.css";

function Service({ title, description, image }) {
  return (
    <div className="service">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Service 1',
      description: 'Description for Service 1',
      image: 'path/to/service1.jpg',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Description for Service 2',
      image: 'path/to/service2.jpg',
    },
    {
      id: 3,
      title: 'Service 3',
      description: 'Description for Service 3',
      image: 'path/to/service3.jpg',
    },
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>Discover the range of services we offer to our customers.</p>

      <div className="services-list">
        {services.map(service => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
