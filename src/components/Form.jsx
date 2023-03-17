import React, { useEffect, useRef, useState } from "react";

const Form = () => {
//   const [details, setDetails] = useState({});

  let details = {}

  const titleRef = useRef();
  const withRef = useRef();
  const locationRef = useRef();
  const dateRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const categoryRef = useRef();

  const createAppointment = async (details) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/create", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          // "Authorization": "Bearer <token>"
        },
        body: JSON.stringify(
        //     {
        //   title: "HELLO HELLO HELLO",
        //   with: "Family",
        //   location: "Restaurant",
        //   date: "1/2/2023",
        //   start: "20:00",
        //   end: "21:00",
        //   category: "dinner",
        // }
        details
        ),
      });
      const data = await res.json();
      console.log(data); // CHANGE HERE !!!!!
    } catch (error) {
      console.log("FETCH PUT FAIL!!!", error.message);
    }
  };

  const handleCreateAppointment = (e) => {
    e.preventDefault();
    details = {...details,
      title: titleRef.current.value,
      with: withRef.current.value,
      location: locationRef.current.value,
      date: dateRef.current.value,
      start: startRef.current.value,
      end: endRef.current.value,
      category: categoryRef.current.value,
    };
    createAppointment(details);
  };

//   useEffect(() => {
//     createAppointment();
//   }, [handleCreateAppointment]);

  return (
    <>
      <form onSubmit={handleCreateAppointment}>
        <h1>Create New Appointment</h1>
        <br />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" ref={titleRef} />
        <label htmlFor="with">With:</label>
        <input type="text" id="with" ref={withRef} />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" ref={locationRef} />
        <label htmlFor="date">Date:</label>
        <input type="text" id="date" ref={dateRef} />
        <label htmlFor="start">Start:</label>
        <input type="text" id="start" ref={startRef} />
        <br />
        <label htmlFor="end">End:</label>
        <input type="text" id="end" ref={endRef} />
        <label htmlFor="category">Category:</label>
        <input type="text" id="Category" ref={categoryRef} />
        <br />
        <button type="submit">Create Appointment</button>
      </form>
    </>
  );
};

export default Form;
