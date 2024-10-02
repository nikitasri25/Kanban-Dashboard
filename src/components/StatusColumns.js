// import React, { useEffect, useState } from 'react';

// const StatusColumns = ({ tickets }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Backlog: [],
//     'In Progress': [],
//     Todo: [],
//     Canceled: [],
//     Done: [],
//   });

//   useEffect(() => {
//     // Group tickets by status
//     const grouped = {
//       Backlog: [],
//       'In Progress': [],
//       Todo: [],
//       Canceled: [],
//       Done: [],
//     };

//     tickets.forEach((ticket) => {
//       console.log('Processing ticket:', ticket); // Debug: Check the ticket data
//       switch (ticket.status) {
//         case 'Backlog':
//           grouped.Backlog.push(ticket);
//           break;
//         case 'In Progress':
//           grouped['In Progress'].push(ticket);
//           break;
//         case 'Todo':
//           grouped.Todo.push(ticket);
//           break;
//         case 'Canceled':
//           grouped.Canceled.push(ticket);
//           break;
//         case 'Done':
//           grouped.Done.push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     console.log('Grouped tickets:', grouped); // Debug: Inspect the grouped tickets
//     setGroupedTickets(grouped);
//   }, [tickets]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {Object.keys(groupedTickets).map((status) => (
//         <div key={status} style={{ flex: 1, padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
//           <h3>{status}</h3>
//           {groupedTickets[status].length > 0 ? (
//             groupedTickets[status].map((ticket) => (
//               <div key={ticket.id} style={{ margin: '5px', padding: '5px', border: '1px solid #000' }}>
//                 <strong>{ticket.id}</strong>: {ticket.title}
//               </div>
//             ))
//           ) : (
//             <p>No tickets in this status</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatusColumns;

// src/StatusColumns.js

// import React, { useEffect, useState } from 'react';
// import './StatusColumns.css'; // Import the CSS file

// const StatusColumns = ({ tickets }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Backlog: [],
//     'In Progress': [],
//     Todo: [],
//     Canceled: [],
//     Done: [],
//   });

//   useEffect(() => {
//     // Group tickets by status
//     const grouped = {
//       Backlog: [],
//       'In Progress': [],
//       Todo: [],
//       Canceled: [],
//       Done: [],
//     };

//     tickets.forEach((ticket) => {
//       console.log('Processing ticket:', ticket); // Debug: Check the ticket data
//       switch (ticket.status) {
//         case 'Backlog':
//           grouped.Backlog.push(ticket);
//           break;
//         case 'In Progress':
//           grouped['In Progress'].push(ticket);
//           break;
//         case 'Todo':
//           grouped.Todo.push(ticket);
//           break;
//         case 'Canceled':
//           grouped.Canceled.push(ticket);
//           break;
//         case 'Done':
//           grouped.Done.push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     console.log('Grouped tickets:', grouped); // Debug: Inspect the grouped tickets
//     setGroupedTickets(grouped);
//   }, [tickets]);

//   return (
//     <div className="status-columns"> {/* Use the CSS class here */}
//       {Object.keys(groupedTickets).map((status) => (
//         <div key={status} className="column"> {/* Use the CSS class here */}
//           <h3>{status}</h3>
//           {groupedTickets[status].length > 0 ? (
//             groupedTickets[status].map((ticket) => (
//               <div key={ticket.id} className="ticket"> {/* Use the CSS class here */}
//                 <strong>{ticket.id}</strong>: {ticket.title}
//               </div>
//             ))
//           ) : (
//             <p>No tickets in this status</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatusColumns;

import React, { useEffect, useState } from 'react';
import './StatusColumns.css'; // Import the CSS file

const StatusColumns = ({ tickets }) => {
  const [groupedTickets, setGroupedTickets] = useState({
    Backlog: [],
    'In Progress': [],
    Todo: [],
    Canceled: [],
    Done: [], // Added Done status
  });

  useEffect(() => {
    // Group tickets by status
    const grouped = {
      Backlog: [],
      'In Progress': [],
      Todo: [],
      Canceled: [],
      Done: [],
    };

    tickets.forEach((ticket) => {
      console.log('Processing ticket:', ticket); // Debug: Check the ticket data
      switch (ticket.status) {
        case 'Backlog':
          grouped.Backlog.push(ticket);
          break;
        case 'In Progress':
          grouped['In Progress'].push(ticket);
          break;
        case 'Todo':
          grouped.Todo.push(ticket);
          break;
        case 'Canceled':
          grouped.Canceled.push(ticket);
          break;
        case 'Done': // Added Done case
          grouped.Done.push(ticket);
          break;
        default:
          break;
      }
    });

    console.log('Grouped tickets:', grouped); // Debug: Inspect the grouped tickets
    setGroupedTickets(grouped);
  }, [tickets]);

  return (
    <div className="status-columns"> {/* Use the CSS class here */}
      {Object.keys(groupedTickets).map((status) => (
        <div key={status} className="column"> {/* Use the CSS class here */}
          <div className="heading">
            {/* SVG icons based on status */}
            {status === 'Backlog' && (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#95999F" strokeWidth="2" strokeDasharray="1.4 1.74" />
                </svg>
                <h3>{status} ({groupedTickets[status].length})</h3>
              </>
            )}
            {status === 'In Progress' && (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="white" stroke="#F2BE00" strokeWidth="2" />
                  <path d="M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z" stroke="#F2BE00" strokeWidth="4" />
                </svg>
                <h3>{status} ({groupedTickets[status].length})</h3>
              </>
            )}
            {status === 'Todo' && (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#B8B8B8" strokeWidth="2" />
                </svg>
                <h3>{status} ({groupedTickets[status].length})</h3>
              </>
            )}
            {status === 'Canceled' && ( // Canceled status
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#D9534F" stroke="#D9534F" strokeWidth="2" />
                  <path d="M4 4L10 10M10 4L4 10" stroke="white" strokeWidth="2" />
                </svg>
                <h3>{status} ({groupedTickets[status].length})</h3>
              </>
            )}
            {status === 'Done' && (
              <>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                  <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="#5E6AD2" stroke="#5E6AD2" strokeWidth="2" />
                  <path d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z" stroke="#5E6AD2" strokeWidth="6" strokeDasharray="18.85 100" />
                  <path d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z" fill="#FBFBFB" />
                </svg>
                <h3>{status} ({groupedTickets[status].length})</h3>
              </>
            )}
          </div>
          {groupedTickets[status].length > 0 ? (
            groupedTickets[status].map((ticket) => (
              <div key={ticket.id} className="ticket"> {/* Use the CSS class here */}
                <strong>{ticket.id}</strong>: {ticket.title}
              </div>
            ))
          ) : (
            <p>No tickets in this status</p> // Handle empty columns
          )}
        </div>
      ))}
    </div>
  );
};

export default StatusColumns;
