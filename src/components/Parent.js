import React, { useState } from 'react';
import PriorityColumns from './PriorityColumns'; // Import PriorityColumns
import UserColumns from './UserColumns'; // Import UserColumns
import StatusColumns from './StatusColumns'; // Import StatusColumns

const KanbanBoard = ({ tickets }) => {
  const [grouping, setGrouping] = useState('priority'); // Default grouping by priority
  const [sortedByTitle, setSortedByTitle] = useState(false); // Sort toggle state

  const handleSortByTitle = () => {
    setSortedByTitle(!sortedByTitle); // Toggle sorting state
  };

  const getSortedTickets = (groupedTickets) => {
    // Sort each group by title alphabetically if sorting is active
    if (sortedByTitle) {
      for (const group in groupedTickets) {
        groupedTickets[group].sort((a, b) => a.title.localeCompare(b.title));
      }
    }
    return groupedTickets;
  };

  const renderColumns = () => {
    switch (grouping) {
      case 'priority':
        return <PriorityColumns tickets={tickets} sortedByTitle={sortedByTitle} getSortedTickets={getSortedTickets} />;
      case 'user':
        return <UserColumns tickets={tickets} sortedByTitle={sortedByTitle} getSortedTickets={getSortedTickets} />;
      case 'status':
        return <StatusColumns tickets={tickets} sortedByTitle={sortedByTitle} getSortedTickets={getSortedTickets} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setGrouping('priority')}>Group by Priority</button>
        <button onClick={() => setGrouping('user')}>Group by User</button>
        <button onClick={() => setGrouping('status')}>Group by Status</button>
        <button onClick={handleSortByTitle}>
          {sortedByTitle ? 'Unsort by Title' : 'Sort by Title'}
        </button>
      </div>
      <div>{renderColumns()}</div>
    </div>
  );
};

export default KanbanBoard;
