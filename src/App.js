// import React, { useEffect, useState } from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Navbar from './components/Navbar';
// import StatusColumns from './components/StatusColumns'; 
// import PriorityColumns from './components/PriorityColumns'; 
// import UserColumns from './components/UserColumns'; 
// import SortedByTitle from './components/Sortedbytitle'; // Import the new component
// import './App.css';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
//         const data = await response.json();
//         setTickets(data.tickets);
//         setUsers(data.users);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/status" element={<StatusColumns tickets={tickets} />} />
//           <Route path="/priority" element={<PriorityColumns tickets={tickets} />} />
//           <Route path="/users" element={<UserColumns tickets={tickets} users={users} />} />
//           <Route path="/sorted" element={<SortedByTitle tickets={tickets} />} /> {/* Add new route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React, { useEffect, useState } from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Navbar from './components/Navbar';
// import StatusColumns from './components/StatusColumns'; 
// import PriorityColumns from './components/PriorityColumns'; 
// import UserColumns from './components/UserColumns'; 
// import SortedByTitle from './components/Sortedbytitle'; // Import the new component
// import './App.css';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [sortByTitle, setSortByTitle] = useState(false); // New state for sorting by title

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
//         const data = await response.json();
//         setTickets(data.tickets);
//         setUsers(data.users);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to handle sorting by title
//   const handleSortByTitle = () => {
//     setSortByTitle(true); // Set to true when sorting by title is clicked
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar onTitleSort={handleSortByTitle} /> {/* Pass handler to Navbar */}
//         <Routes>
//           <Route path="/status" element={<StatusColumns tickets={tickets} />} />
//           <Route path="/priority" element={<PriorityColumns tickets={tickets} sortByTitle={sortByTitle} />} />
//           <Route path="/users" element={<UserColumns tickets={tickets} users={users} />} />
//           <Route path="/sorted" element={<PriorityColumns tickets={tickets} sortByTitle={sortByTitle} />} /> {/* Use sorted */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import StatusColumns from './components/StatusColumns'; 
import PriorityColumns from './components/PriorityColumns'; 
import UserColumns from './components/UserColumns'; 
import SortedByTitle from './components/Sortedbytitle'; // Import the new component
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [sortByTitle, setSortByTitle] = useState(false); // New state for sorting by title

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle sorting by title
  const handleSortByTitle = () => {
    setSortByTitle(true); // Set to true when sorting by title is clicked
  };

  return (
    <Router>
      <div>
        <Navbar onTitleSort={handleSortByTitle} /> {/* Pass handler to Navbar */}
        <Routes>
          <Route path="/status" element={<StatusColumns tickets={tickets} />} />
          <Route path="/priority" element={<PriorityColumns tickets={tickets} sortByTitle={sortByTitle} />} />
          <Route path="/users" element={<UserColumns tickets={tickets} users={users} />} />
          <Route path="/sorted" element={<PriorityColumns tickets={tickets} sortByTitle={sortByTitle} />} /> {/* Use sorted */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


