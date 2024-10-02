// import React, { useEffect, useState } from 'react';

// const SortedByTitle = ({ tickets }) => {
//   const [sortedTickets, setSortedTickets] = useState([]);

//   useEffect(() => {
//     // Sort tickets by title in ascending order
//     const sorted = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
//     setSortedTickets(sorted);
//   }, [tickets]);

//   return (
//     <div>
//       <h2>Tickets Sorted by Title</h2>
//       <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
//         {sortedTickets.length > 0 ? (
//           sortedTickets.map((ticket) => (
//             <div key={ticket.id} style={{ margin: '5px', padding: '5px', border: '1px solid #000' }}>
//               <strong>{ticket.id}</strong>: {ticket.title}
//             </div>
//           ))
//         ) : (
//           <p>No tickets available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SortedByTitle;
// src/SortedByTitle.js

// import React, { useEffect, useState } from 'react';
// import './Sortedbytitle.css'; // Import the CSS file

// const SortedByTitle = ({ tickets }) => {
//   const [sortedTickets, setSortedTickets] = useState([]);

//   useEffect(() => {
//     // Sort tickets by title in ascending order
//     const sorted = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
//     setSortedTickets(sorted);
//   }, [tickets]);

//   return (
//     <div>
//       <h2>Tickets Sorted by Title</h2>
//       <div className="sorted-tickets"> {/* Use the CSS class here */}
//         {sortedTickets.length > 0 ? (
//           sortedTickets.map((ticket) => (
//             <div key={ticket.id} className="ticket"> {/* Use the CSS class here */}
//               <strong>{ticket.id}</strong>: {ticket.title}
//             </div>
//           ))
//         ) : (
//           <p>No tickets available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SortedByTitle;


import React from 'react';
import './StatusColumns.css';

const StatusColumns = ({ tickets }) => {
  return (
    <div className="status-columns">
      {Object.keys(tickets).map((status) => (
        <div key={status} className="column">
          <h3>{status}</h3>
          {tickets[status].length > 0 ? (
            tickets[status].map((ticket) => (
              <div key={ticket.id} className="ticket">
                <strong>{ticket.id}</strong>: {ticket.title}
              </div>
            ))
          ) : (
            <p>No tickets in this status</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatusColumns;
