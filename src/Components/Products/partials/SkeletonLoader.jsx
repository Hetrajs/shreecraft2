import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image"></div>
      <div className="skeleton-details">
        <div className="skeleton-title"></div>
        <div className="skeleton-size"></div>
        <div className="skeleton-select"></div>
        <div className="skeleton-buttons"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
