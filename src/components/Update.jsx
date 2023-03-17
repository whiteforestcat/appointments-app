import React, { useState, useRef } from "react";

const Update = () => {
  //   const [details, setDetails] = useState({});

  let details = {};
  const titleRef = useRef();
  const withRef = useRef();
  const locationRef = useRef();
  const dateRef = useRef();
  const startRef = useRef();
  const endRef = useRef();

  const createAppointment = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/update", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          // "Authorization": "Bearer <token>"
        },
        body: JSON.stringify(
          //   {
          //     title: "Dentist",
          //     newWith: "Dr SAM",
          //     newLocation: "Singapore",
          //     newDate: "8/5/2023",
          //     newStart: "10:30",
          //   }
          details
        ),
      });
      const data = await res.json();
      console.log(data); // CHANGE HERE !!!!!
      console.log(details);
    } catch (error) {
      console.log("FETCH PUT FAIL!!!", error.message);
    }
  };

  const handleCreateAppointment = (e) => {
    e.preventDefault();
    details = {
      title: titleRef.current.value,
      newWith: withRef.current.value,
      newLocation: locationRef.current.value,
      newDate: dateRef.current.value,
      newStart: startRef.current.value,
    };
    createAppointment();
  };

  return (
    <>
      <form onSubmit={handleCreateAppointment}>
        <h1>Update Existing Appointment</h1>
        <br />
        <label htmlFor="title">Search:</label>
        <input type="text" id="title" ref={titleRef} />
        <label htmlFor="with">New With:</label>
        <input type="text" id="with" ref={withRef} />
        <label htmlFor="location">New Location:</label>
        <input type="text" id="location" ref={locationRef} />
        <label htmlFor="date">New Date:</label>
        <input type="text" id="date" ref={dateRef} />
        <br />
        <label htmlFor="start">New Start:</label>
        <input type="text" id="start" ref={startRef} />
        <label htmlFor="end">New End:</label>
        <input type="text" id="end" ref={endRef} />
        <br />
        <button type="submit">Change Appointment</button>
      </form>
    </>
  );
};

export default Update;
