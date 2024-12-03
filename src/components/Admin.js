import React, { useState } from "react";
import Calendar from "react-calendar"; // Install with `npm install react-calendar`
import "react-calendar/dist/Calendar.css"; // Calendar styles
import "./Admin.css"; // Custom CSS

// Example static appointments data (you can replace this with API data)
const appointmentsData = [
  {
    date: "2024-12-03",
    time: "10:00 AM",
    name: "John Doe",
    email: "john@example.com",
    contact: "1234567890",
    comments: "Looking forward to it.",
  },
  {
    date: "2024-12-03",
    time: "1:00 PM",
    name: "Jane Smith",
    email: "jane@example.com",
    contact: "0987654321",
    comments: "Please confirm my slot.",
  },
  {
    date: "2024-12-04",
    time: "3:00 PM",
    name: "Alice Johnson",
    email: "alice@example.com",
    contact: "1122334455",
    comments: "",
  },
];

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  // Format the date to match the format in the appointments data
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Handle date change and filter appointments
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    const appointmentsForDate = appointmentsData.filter(
      (appointment) => appointment.date === formattedDate
    );
    setFilteredAppointments(appointmentsForDate);
  };

  return (
    <div className="admin-dashboard">
      <h2 className="admin-title">Admin Dashboard</h2>
      <div className="calendar-section">
        <h3>Select a Date</h3>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="calendar"
        />
      </div>

      <div className="appointments-section">
        <h3>Appointments for {formatDate(selectedDate)}</h3>
        {filteredAppointments.length > 0 ? (
          <ul className="appointments-list">
            {filteredAppointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p>
                  <strong>Name:</strong> {appointment.name}
                </p>
                <p>
                  <strong>Email:</strong> {appointment.email}
                </p>
                <p>
                  <strong>Contact:</strong> {appointment.contact}
                </p>
                {appointment.comments && (
                  <p>
                    <strong>Comments:</strong> {appointment.comments}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments for this date.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
