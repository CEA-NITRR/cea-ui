import React from 'react';
import './Loading.css';  

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="/loading.gif" alt="Loading..." className="loading-gif" />
      <p>Loading, please wait...</p>
    </div>
  );
};

export default Loading;
