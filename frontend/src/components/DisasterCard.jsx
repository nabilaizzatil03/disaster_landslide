/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const DisasterCard = ({ disaster }) => {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-lg font-bold">{disaster.title}</h2>
      <p className="text-gray-600">{disaster.description}</p>
      <Link to={`/detail/${disaster.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default DisasterCard;
