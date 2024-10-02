// import React, { useEffect, useState } from 'react';

// const UserColumns = ({ tickets, users }) => {
//   const [groupedTickets, setGroupedTickets] = useState({});

//   useEffect(() => {
//     // Create an object to store tickets grouped by userId
//     const grouped = {};

//     // Initialize grouped object with users, setting an empty array for each user
//     users.forEach((user) => {
//       grouped[user.id] = { name: user.name, tickets: [] };
//     });

//     // Add tickets to the corresponding user's array based on userId
//     tickets.forEach((ticket) => {
//       if (grouped[ticket.userId]) {
//         grouped[ticket.userId].tickets.push(ticket);
//       }
//     });

//     setGroupedTickets(grouped);
//   }, [tickets, users]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {Object.keys(groupedTickets).map((userId) => {
//         const userGroup = groupedTickets[userId];
//         const ticketCount = userGroup.tickets.length;

//         return (
//           <div key={userId} style={{ flex: 1, padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
//             <h3>{userGroup.name} ({ticketCount} {ticketCount === 1 ? 'ticket' : 'tickets'})</h3>
//             {ticketCount > 0 ? (
//               userGroup.tickets.map((ticket) => (
//                 <div key={ticket.id} style={{ margin: '5px', padding: '5px', border: '1px solid #000' }}>
//                   <strong>{ticket.id}</strong>: {ticket.title}
//                 </div>
//               ))
//             ) : (
//               <p>No tickets assigned</p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UserColumns;


// src/UserColumns.js


import React, { useEffect, useState } from 'react';
import './UserColumns.css'; // Import the CSS file

const UserColumns = ({ tickets, users }) => {
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    // Create an object to store tickets grouped by userId
    const grouped = {};

    // Initialize grouped object with users, setting an empty array for each user
    users.forEach((user) => {
      grouped[user.id] = { name: user.name, tickets: [] };
    });

    // Add tickets to the corresponding user's array based on userId
    tickets.forEach((ticket) => {
      if (grouped[ticket.userId]) {
        grouped[ticket.userId].tickets.push(ticket);
      }
    });

    setGroupedTickets(grouped);
  }, [tickets, users]);

  return (
    <div className="user-columns"> {/* Use the CSS class here */}
      {Object.keys(groupedTickets).map((userId) => {
        const userGroup = groupedTickets[userId];
        const ticketCount = userGroup.tickets.length;

        return (
          <div key={userId} className="column"> {/* Use the CSS class here */}
            <h3>{userGroup.name} ({ticketCount} {ticketCount === 1 ? 'ticket' : 'tickets'})</h3>
            {ticketCount > 0 ? (
              userGroup.tickets.map((ticket) => (
                <div key={ticket.id} className="ticket"> {/* Use the CSS class here */}
                  <strong>{ticket.id}</strong>: {ticket.title}
                </div>
              ))
            ) : (
              <p>No tickets assigned</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserColumns;



// import React from 'react';
// import './UserColumns.css';

// const UserColumns = ({ tickets, users }) => {
//   return (
//     <div className="user-columns">
//       {Object.keys(tickets).map((userId) => {
//         const userGroup = tickets[userId];
//         const ticketCount = userGroup.tickets.length;

//         return (
//           <div key={userId} className="column">
//             <h3>{userGroup.name} ({ticketCount} {ticketCount === 1 ? 'ticket' : 'tickets'})</h3>
//             {ticketCount > 0 ? (
//               userGroup.tickets.map((ticket) => (
//                 <div key={ticket.id} className="ticket">
//                   <strong>{ticket.id}</strong>: {ticket.title}
//                 </div>
//               ))
//             ) : (
//               <p>No tickets assigned</p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UserColumns;
