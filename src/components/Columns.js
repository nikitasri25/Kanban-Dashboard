import React, { Component } from 'react';
import Card from './Card'; // Import the Card component
//import './Columns.css'; // Import the CSS file

export default class Columns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
    };
  }

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Replace with your API URL
      const data = await response.json();
      this.setState({ tickets: data.tickets });
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  render() {
    const { tickets } = this.state;

    // Group tickets by priority
    const groupedTickets = {
      'No Priority': tickets.filter(ticket => ticket.priority === 0),
      Urgent: tickets.filter(ticket => ticket.priority === 4),
      High: tickets.filter(ticket => ticket.priority === 3),
      Medium: tickets.filter(ticket => ticket.priority === 2),
      Low: tickets.filter(ticket => ticket.priority === 1),
    };

    return (
      <div className="columns">
        <div className={`column no-priority`}>
          <h3>No Priority</h3>
          {groupedTickets['No Priority'].map(ticket => (
            <Card key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} user={ticket.userId} />
          ))}
        </div>
        <div className={`column urgent`}>
          <h3>Urgent</h3>
          {groupedTickets['Urgent'].map(ticket => (
            <Card key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} user={ticket.userId} />
          ))}
        </div>
        <div className={`column high`}>
          <h3>High</h3>
          {groupedTickets['High'].map(ticket => (
            <Card key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} user={ticket.userId} />
          ))}
        </div>
        <div className={`column medium`}>
          <h3>Medium</h3>
          {groupedTickets['Medium'].map(ticket => (
            <Card key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} user={ticket.userId} />
          ))}
        </div>
        <div className={`column low`}>
          <h3>Low</h3>
          {groupedTickets['Low'].map(ticket => (
            <Card key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} user={ticket.userId} />
          ))}
        </div>
      </div>
    );
  }
}

