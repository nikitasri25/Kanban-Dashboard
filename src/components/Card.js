// src/Card.js
import React from 'react';
import './Card.css';
const Card = ({ title, status, priority, user }) => {
  return (
  <>
    <div className= "card">
      <h4   className= "title" >{title}</h4>
      <p className="status">{status}</p>
      <p className="priority">Priority: {priority}</p>
      <p  className="user">Assigned to: {user}</p>
    </div>
    </>
  );
};

export default Card;
