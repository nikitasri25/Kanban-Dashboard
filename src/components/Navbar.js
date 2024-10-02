// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './NavBar.css';
// import downIcon from './down.svg';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showGrouping, setShowGrouping] = useState(false);
//   const [showOrdering, setShowOrdering] = useState(false);

//   const navigate = useNavigate(); 

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//     console.log(showDropdown);

//   };

//   const toggleGrouping = () => {
//     setShowGrouping(prev => !prev);
//     setShowOrdering(false); // Close ordering dropdown
//   };

//   const toggleOrdering = () => {
//     setShowOrdering(prev => !prev);
//     setShowGrouping(false); // Close grouping dropdown
//   };

//   const handleStatusClick = () => {
//     navigate('/status');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handlePriorityClick = () => {
//     navigate('/priority');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handleUsersClick = () => {
//     navigate('/users');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handleSortedClick = () => {
//     navigate('/sorted');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   return (
//     <nav className="navbar">
//       <div className="container-fluid">
//         <ul className="navbar-nav">
//           <li className="nav-item dropdown">
//             <button className="display-btn" onClick={toggleDropdown}>
//               Display <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//             </button>
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <div className="dropdown-item" onClick={toggleGrouping}>
//                   Grouping <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//                   {showGrouping && (
//                     <div className="nested-dropdown">
//                       <div className="dropdown-item" onClick={handleStatusClick}>Status</div>
//                       <div className="dropdown-item" onClick={handleUsersClick}>User</div>
//                       <div className="dropdown-item" onClick={handlePriorityClick}>Priority</div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="dropdown-item" onClick={toggleOrdering}>
//                   Ordering <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//                   {showOrdering && (
//                     <div className="nested-dropdown">
//                       <div className="dropdown-item" onClick={handlePriorityClick}>Priority</div>
//                       <div className="dropdown-item" onClick={handleSortedClick}>Title</div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './NavBar.css';
// import downIcon from './down.svg';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showGrouping, setShowGrouping] = useState(false);
//   const [showOrdering, setShowOrdering] = useState(false);
//   const navigate = useNavigate(); 

//   // Handle outside click to close dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.navbar')) {
//         setShowDropdown(false);
//         setShowGrouping(false);
//         setShowOrdering(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//     setShowGrouping(false); // Close nested dropdowns
//     setShowOrdering(false);
//   };

//   const toggleGrouping = () => {
//     setShowGrouping(prev => !prev);
//     setShowOrdering(false); // Close ordering dropdown
//   };

//   const toggleOrdering = () => {
//     setShowOrdering(prev => !prev);
//     setShowGrouping(false); // Close grouping dropdown
//   };

//   const handleStatusClick = () => {
//     navigate('/status');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handlePriorityClick = () => {
//     navigate('/priority');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handleUsersClick = () => {
//     navigate('/users');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handleSortedClick = () => {
//     navigate('/sorted');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   return (
//     <nav className="navbar">
//       <div className="container-fluid">
//         <ul className="navbar-nav">
//           <li className="nav-item dropdown">
//             <button className="display-btn" onClick={toggleDropdown}>
//               Display <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//             </button>
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <div className="dropdown-item" onClick={toggleGrouping}>
//                   Grouping <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//                   {showGrouping && (
//                     <div className="nested-dropdown">
//                       <div className="dropdown-item" onClick={handleStatusClick}>Status</div>
//                       <div className="dropdown-item" onClick={handleUsersClick}>User</div>
//                       <div className="dropdown-item" onClick={handlePriorityClick}>Priority</div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="dropdown-item" onClick={toggleOrdering}>
//                   Ordering <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//                   {showOrdering && (
//                     <div className="nested-dropdown">
//                       <div className="dropdown-item" onClick={handlePriorityClick}>Priority Sort</div>
//                       <div className="dropdown-item" onClick={handleSortedClick}>Title Sort</div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react'; // Ensure all hooks are imported
// import { useNavigate } from 'react-router-dom'; 
// import './NavBar.css';
// import downIcon from './down.svg'; // Ensure this path is correct

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showGrouping, setShowGrouping] = useState(false);
//   const [showOrdering, setShowOrdering] = useState(false);
//   const navigate = useNavigate(); 

//   // Handle outside click to close dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.navbar')) {
//         setShowDropdown(false);
//         setShowGrouping(false);
//         setShowOrdering(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setShowDropdown(prev => !prev);
//     setShowGrouping(false); // Close nested dropdowns
//     setShowOrdering(false);
//   };

//   const toggleGrouping = () => {
//     setShowGrouping(prev => !prev);
//     setShowOrdering(false); // Close ordering dropdown
//   };

//   const toggleOrdering = () => {
//     setShowOrdering(prev => !prev);
//     setShowGrouping(false); // Close grouping dropdown
//   };

//   const handleStatusClick = () => {
//     navigate('/status');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handlePriorityClick = () => {
//     navigate('/priority');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handleUsersClick = () => {
//     navigate('/users');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   const handleSortedClick = () => {
//     navigate('/sorted');
//     setShowDropdown(false); // Close dropdown after navigation
//   };

//   return (
//     <nav className="navbar">
//       <div className="container-fluid">
//         <ul className="navbar-nav">
//           <li className="nav-item dropdown">
//             <button className="display-btn" onClick={toggleDropdown}>
//               Display <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//             </button>
//             {showDropdown && (
//               <div className="dropdown-menu">
//                 <div className="dropdown-item" onClick={toggleGrouping}>
//                   Grouping <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//                   {showGrouping && (
//                     <div className="nested-dropdown">
//                       <div className="dropdown-item" onClick={handleStatusClick}>Status</div>
//                       <div className="dropdown-item" onClick={handleUsersClick}>User</div>
//                       <div className="dropdown-item" onClick={handlePriorityClick}>Priority</div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="dropdown-item" onClick={toggleOrdering}>
//                   Ordering <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
//                   {showOrdering && (
//                     <div className="nested-dropdown">
//                       <div className="dropdown-item" onClick={handlePriorityClick}>Priority Sort</div>
//                       <div className="dropdown-item" onClick={handleSortedClick}>Title Sort</div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './NavBar.css';
import downIcon from './down.svg'; // Ensure this path is correct

const Navbar = ({ onTitleSort }) => { // Accept onTitleSort as a prop
  const [showDropdown, setShowDropdown] = useState(false);
  const [showGrouping, setShowGrouping] = useState(false);
  const [showOrdering, setShowOrdering] = useState(false);
  const navigate = useNavigate(); 

  // Handle outside click to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setShowDropdown(false);
        setShowGrouping(false);
        setShowOrdering(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
    setShowGrouping(false); // Close nested dropdowns
    setShowOrdering(false);
  };

  const toggleGrouping = () => {
    setShowGrouping(prev => !prev);
    setShowOrdering(false); // Close ordering dropdown
  };

  const toggleOrdering = () => {
    setShowOrdering(prev => !prev);
    setShowGrouping(false); // Close grouping dropdown
  };

  const handleStatusClick = () => {
    navigate('/status');
    setShowDropdown(false); // Close dropdown after navigation
  };

  const handlePriorityClick = () => {
    navigate('/priority');
    setShowDropdown(false); // Close dropdown after navigation
  };

  const handleUsersClick = () => {
    navigate('/users');
    setShowDropdown(false); // Close dropdown after navigation
  };

  const handleSortedClick = () => {
    onTitleSort(); // Call the sort handler from props
    navigate('/sorted'); // Navigate to sorted path
    setShowDropdown(false); // Close dropdown after navigation
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button className="display-btn" onClick={toggleDropdown}>
              Display <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={toggleGrouping}>
                  Grouping <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
                  {showGrouping && (
                    <div className="nested-dropdown">
                      <div className="dropdown-item" onClick={handleStatusClick}>Status</div>
                      <div className="dropdown-item" onClick={handleUsersClick}>User</div>
                      <div className="dropdown-item" onClick={handlePriorityClick}>Priority</div>
                    </div>
                  )}
                </div>
                <div className="dropdown-item" onClick={toggleOrdering}>
                  Ordering <img src={downIcon} alt="Dropdown" className="dropdown-icon" />
                  {showOrdering && (
                    <div className="nested-dropdown">
                      <div className="dropdown-item" onClick={handlePriorityClick}>Priority Sort</div>
                      <div className="dropdown-item" onClick={handleSortedClick}>Title Sort</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


