import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
      <h1>Dashboard</h1>
      <p>Welcome! You have successfully signed in.</p>
      <Link to='/login' style={{ color: 'blue', textDecoration: 'underline' }}>Logout</Link>
    </div>
  );
}