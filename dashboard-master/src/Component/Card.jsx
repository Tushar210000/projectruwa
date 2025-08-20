import React from 'react';

const Card = ({ title, value, change, changeColor, extra }) => (
  <div className="col-md-3 mb-4">
    <div className="card shadow-sm">
      <div className="card-body">
        <h6>{title}</h6>
        <h4>{value}</h4>
        <span className={`badge ${changeColor}`}>{change}</span>
        <p className="mt-2 text-muted">{extra}</p>
      </div>
    </div>
  </div>
);

export default Card;
