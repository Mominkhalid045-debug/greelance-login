import React from 'react';
export default function Dashboard() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Poppins, sans-serif' }}>
      <h1>Dashboard</h1>
      <p>Welcome! You have successfully signed in.</p>
      <a href='/login' style={{ color: 'blue', textDecoration: 'underline' }}>Logout</a>
    </div>
  );
}