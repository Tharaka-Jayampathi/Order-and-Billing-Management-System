import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Orders</h3>
          <p>150</p>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <p>$4,500.00</p>
        </div>
        <div className="card">
          <h3>Active Bills</h3>
          <p>24</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
