// import React, { useEffect, useState } from 'react';

// const PriorityColumns = ({ tickets }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Urgent: [],
//     High: [],
//     Medium: [],
//     Low: [],
//     'No priority': [],
//   });

//   useEffect(() => {
//     // Group tickets by priority
//     const grouped = {
//       Urgent: [],
//       High: [],
//       Medium: [],
//       Low: [],
//       'No priority': [],
//     };

//     tickets.forEach((ticket) => {
//       switch (ticket.priority) {
//         case 4:
//           grouped.Urgent.push(ticket);
//           break;
//         case 3:
//           grouped.High.push(ticket);
//           break;
//         case 2:
//           grouped.Medium.push(ticket);
//           break;
//         case 1:
//           grouped.Low.push(ticket);
//           break;
//         case 0:
//           grouped['No priority'].push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     setGroupedTickets(grouped);
//   }, [tickets]);

//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       {['Urgent', 'High', 'Medium', 'Low', 'No priority'].map((priority) => (
//         <div key={priority} style={{ flex: 1, padding: '10px', border: '1px solid #ccc', margin: '5px' }}>
//           <h3>{priority}</h3>
//           {groupedTickets[priority].length > 0 ? (
//             groupedTickets[priority].map((ticket) => (
//               <div key={ticket.id} style={{ margin: '5px', padding: '5px', border: '1px solid #000' }}>
//                 <strong>{ticket.id}</strong>: {ticket.title}
//               </div>
//             ))
//           ) : (
//             <p>No tickets in this priority</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PriorityColumns;

// src/PriorityColumns.js
// import React, { useEffect, useState } from 'react';
// import './PriorityColumns.css'; // Import the CSS file

// const PriorityColumns = ({ tickets }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Urgent: [],
//     High: [],
//     Medium: [],
//     Low: [],
//     'No priority': [],
//   });

//   useEffect(() => {
//     // Group tickets by priority
//     const grouped = {
//       Urgent: [],
//       High: [],
//       Medium: [],
//       Low: [],
//       'No priority': [],
//     };

//     tickets.forEach((ticket) => {
//       switch (ticket.priority) {
//         case 4:
//           grouped.Urgent.push(ticket);
//           break;
//         case 3:
//           grouped.High.push(ticket);
//           break;
//         case 2:
//           grouped.Medium.push(ticket);
//           break;
//         case 1:
//           grouped.Low.push(ticket);
//           break;
//         case 0:
//           grouped['No priority'].push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     setGroupedTickets(grouped);
//   }, [tickets]);

//   return (
//     <div className="priority-columns">
//       {['Urgent', 'High', 'Medium', 'Low', 'No priority'].map((priority) => (
//         <div key={priority} className="column">
//           <h3>{priority}</h3>
//           {groupedTickets[priority].length > 0 ? (
//             groupedTickets[priority].map((ticket) => (
//               <div key={ticket.id} className="ticket">
//                 <strong>{ticket.id}</strong>: {ticket.title}
//               </div>
//             ))
//           ) : (
//             <p>No tickets in this priority</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PriorityColumns;



// import React, { useEffect, useState } from 'react';
// import Card from './Card'; // Use your Card component to render individual tickets
// import './PriorityColumns.css'; // Import the CSS file

// const PriorityColumns = ({ tickets }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Urgent: [],
//     High: [],
//     Medium: [],
//     Low: [],
//     'No priority': [],
//   });

//   useEffect(() => {
//     // Group tickets by priority
//     const grouped = {
//       Urgent: [],
//       High: [],
//       Medium: [],
//       Low: [],
//       'No priority': [],
//     };

//     tickets.forEach((ticket) => {
//       switch (ticket.priority) {
//         case 4:
//           grouped.Urgent.push(ticket);
//           break;
//         case 3:
//           grouped.High.push(ticket);
//           break;
//         case 2:
//           grouped.Medium.push(ticket);
//           break;
//         case 1:
//           grouped.Low.push(ticket);
//           break;
//         case 0:
//           grouped['No priority'].push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     setGroupedTickets(grouped);
//   }, [tickets]);

//   return (
//     <div className="priority-columns">
//       {['Urgent', 'High', 'Medium', 'Low', 'No priority'].map((priority) => (
//         <div key={priority} className="column">
//           <h3>{priority}</h3>
//           {groupedTickets[priority].length > 0 ? (
//             groupedTickets[priority].map((ticket) => (
//               <Card key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} user={ticket.userId} />
//             ))
//           ) : (
//             <p>No tickets in this priority</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PriorityColumns;



// import React, { useEffect, useState } from 'react';
// import './PriorityColumns.css'; // Import the CSS file

// const PriorityColumns = ({ tickets }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Urgent: [],
//     High: [],
//     Medium: [],
//     Low: [],
//     'No priority': [],
//   });

//   useEffect(() => {
//     // Group tickets by priority
//     const grouped = {
//       Urgent: [],
//       High: [],
//       Medium: [],
//       Low: [],
//       'No priority': [],
//     };

//     tickets.forEach((ticket) => {
//       switch (ticket.priority) {
//         case 4:
//           grouped.Urgent.push(ticket);
//           break;
//         case 3:
//           grouped.High.push(ticket);
//           break;
//         case 2:
//           grouped.Medium.push(ticket);
//           break;
//         case 1:
//           grouped.Low.push(ticket);
//           break;
//         case 0:
//           grouped['No priority'].push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     setGroupedTickets(grouped);
//   }, [tickets]);

//   return (
//     <div className="priority-columns">
//       {['Urgent', 'High', 'Medium', 'Low', 'No priority'].map((priority) => (
//         <div key={priority} className="column">
//           <h3>{priority}</h3>
//           {groupedTickets[priority].length > 0 ? (
//             groupedTickets[priority].map((ticket) => (
//               <div key={ticket.id} className="ticket">
//                 <strong>{ticket.id}</strong>: {ticket.title}
//               </div>
//             ))
//           ) : (
//             <p>No tickets in this priority</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PriorityColumns;


// import React, { useEffect, useState } from 'react';
// import './PriorityColumns.css'; // Import the CSS file

// const PriorityColumns = ({ tickets, sortByTitle }) => {
//   const [groupedTickets, setGroupedTickets] = useState({
//     Urgent: [],
//     High: [],
//     Medium: [],
//     Low: [],
//     'No priority': [],
//   });

//   useEffect(() => {
//     // Group tickets by priority
//     const grouped = {
//       Urgent: [],
//       High: [],
//       Medium: [],
//       Low: [],
//       'No priority': [],
//     };

//     tickets.forEach((ticket) => {
//       switch (ticket.priority) {
//         case 4:
//           grouped.Urgent.push(ticket);
//           break;
//         case 3:
//           grouped.High.push(ticket);
//           break;
//         case 2:
//           grouped.Medium.push(ticket);
//           break;
//         case 1:
//           grouped.Low.push(ticket);
//           break;
//         case 0:
//           grouped['No priority'].push(ticket);
//           break;
//         default:
//           break;
//       }
//     });

//     // Sort tickets by title if sortByTitle is true
//     if (sortByTitle) {
//       Object.keys(grouped).forEach((priority) => {
//         grouped[priority] = grouped[priority].sort((a, b) =>
//           a.title.localeCompare(b.title)
//         );
//       });
//     }

//     setGroupedTickets(grouped);
//   }, [tickets, sortByTitle]);

//   return (
//     <div className="priority-columns">
//       {['Urgent', 'High', 'Medium', 'Low', 'No priority'].map((priority) => (
//         <div key={priority} className="column">
//           <h3>{priority}</h3>
//           {groupedTickets[priority].length > 0 ? (
//             groupedTickets[priority].map((ticket) => (
//               <div key={ticket.id} className="ticket">
//                 <strong>{ticket.id}</strong>: {ticket.title}
//               </div>
//             ))
//           ) : (
//             <p>No tickets in this priority</p> // Handle empty columns
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PriorityColumns;


import React, { useEffect, useState } from 'react';
import './PriorityColumns.css'; // Import the CSS file

const PriorityColumns = ({ tickets, sortByTitle }) => {
  const [groupedTickets, setGroupedTickets] = useState({
    Urgent: [],
    High: [],
    Medium: [],
    Low: [],
    'No priority': [],
  });

  useEffect(() => {
    // Group tickets by priority
    const grouped = {
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
      'No priority': [],
    };

    tickets.forEach((ticket) => {
      switch (ticket.priority) {
        case 4:
          grouped.Urgent.push(ticket);
          break;
        case 3:
          grouped.High.push(ticket);
          break;
        case 2:
          grouped.Medium.push(ticket);
          break;
        case 1:
          grouped.Low.push(ticket);
          break;
        case 0:
          grouped['No priority'].push(ticket);
          break;
        default:
          break;
      }
    });

    // Sort tickets by title if sortByTitle is true
    if (sortByTitle) {
      Object.keys(grouped).forEach((priority) => {
        grouped[priority] = grouped[priority].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      });
    }

    setGroupedTickets(grouped);
  }, [tickets, sortByTitle]);

  return (
    <div className="priority-columns">
      {['Urgent', 'High', 'Medium', 'Low', 'No priority'].map((priority) => (
        <div key={priority} className="column">
          <h3>{priority}</h3>
          {groupedTickets[priority].length > 0 ? (
            groupedTickets[priority].map((ticket) => (
              <div key={ticket.id} className="ticket">
                <strong>{ticket.id}</strong>: {ticket.title}
              </div>
            ))
          ) : (
            <p>No tickets in this priority</p> // Handle empty columns
          )}
        </div>
      ))}
    </div>
  );
};

export default PriorityColumns;


