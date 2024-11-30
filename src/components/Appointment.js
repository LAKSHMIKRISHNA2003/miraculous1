import React, { useState } from "react";
import Calendar from "react-calendar"; // Install with `npm install react-calendar`
import "react-calendar/dist/Calendar.css"; // Calendar styles
import "./Appointment.css"; // Custom CSS

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    comments: "",
  });

  const timeSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked!\nDate: ${selectedDate}\nTime: ${selectedTime}\nName: ${formData.name}\nEmail: ${formData.email}`
    );
  };

  return (
    <div className="appointment-page">
      <h2 className="title">Book an Appointment</h2>
      <div className="calendar-section">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="calendar"
        />
      </div>

      {selectedDate && (
        <div className="time-slot-section">
          <h3>Available Time Slots</h3>
          <div className="time-slots">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                className={`time-slot ${
                  selectedTime === slot ? "selected" : ""
                }`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTime && (
        <div className="form-section">
          <h3>Enter Your Details</h3>
          <form onSubmit={handleSubmit} className="appointment-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              value={formData.contact}
              onChange={handleFormChange}
              required
            />
            <textarea
              name="comments"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleFormChange}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
