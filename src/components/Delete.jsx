import React, { useRef } from "react";

const Delete = () => {
  let deleteInfo = {};
  const titleRef = useRef();

  const deleteAppointment = async (deleteInfo) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/delete", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          // "Authorization": "Bearer <token>"
        },
        body: JSON.stringify(
          // {
          //   title: "Dentist",
          // }
          deleteInfo
        ),
      });
      const data = await res.json();
      console.log(data); // CHANGE HERE !!!!!
      console.log(deleteInfo);
    } catch (error) {
      console.log("FETCH PUT FAIL!!!", error.message);
    }
  };

  const handleDeleteAppointment = (e) => {
    e.preventDefault();
    deleteInfo.title = titleRef.current.value;
    console.log(deleteInfo);
    deleteAppointment(deleteInfo);
  };

  return (
    <>
      <form onSubmit={handleDeleteAppointment}>
        <h1>Delete Existing Appointment</h1>
        <br />
        <label htmlFor="title">Search:</label>
        <input type="text" id="title" ref={titleRef} />
        <br />
        <button type="submit">Delete Appointment</button>
      </form>
    </>
  );
};

export default Delete;
