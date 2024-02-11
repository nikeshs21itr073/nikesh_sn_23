import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    numberOfPersons: "1 person",
    numberOfLuggage: "1 luggage",
    journeyDate: "",
    journeyTime: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://backend3-bdkl.onrender.com/u/h", formData);

      if (response.data.message === "Booking successful") {
        alert("Booking successful!"); // Show success message
        
        setFormData(initialFormData); // Reset the form
      } else {
        alert("Booking failed"); // Show error message
      }
    } catch (error) {
      toast.error("Error: " + error.message); // Show error message
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    numberOfPersons: "1 person",
    numberOfLuggage: "1 luggage",
    journeyDate: "",
    journeyTime: "",
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email} email
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number" number minlength={10} maxlength={10}
          value={formData.phoneNumber}
          onChange={handleInputChange} minsize={10} maxsize={10}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="fromAddress"
          placeholder="From Address"
          value={formData.fromAddress}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="toAddress"
          placeholder="To Address"
          value={formData.toAddress}
          onChange={handleInputChange}
          required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select
          name="numberOfPersons"
          value={formData.numberOfPersons}
          onChange={handleInputChange}
        >
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select
          name="numberOfLuggage"
          value={formData.numberOfLuggage}
          onChange={handleInputChange}
        >
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggage">2 Luggage</option>
          <option value="3 luggage">3 Luggage</option>
          <option value="4 luggage">4 Luggage</option>
          <option value="5+ luggage">5+ Luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="date"
          name="journeyDate"
          value={formData.journeyDate}
          onChange={handleInputChange} required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="journeyTime"
          className="time__picker"
          value={formData.journeyTime}
          onChange={handleInputChange} required
        />
      </FormGroup>

      <Button type="submit">Book Now</Button>
    </Form>
  );
};

export default BookingForm;
