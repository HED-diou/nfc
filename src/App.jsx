import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import { profiles } from './data/profiles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/youness" replace />} />
      <Route path="/youness" element={<ProfileCard profile={profiles.youness} />} />
      <Route path="/hind" element={<ProfileCard profile={profiles.hind} />} />
      <Route path="/yazid" element={<ProfileCard profile={profiles.yazid} />} />
      <Route path="*" element={<div style={{ textAlign: 'center', padding: '50px' }}><h1>404 - Profile Not Found</h1></div>} />
    </Routes>
  );
}

export default App;
