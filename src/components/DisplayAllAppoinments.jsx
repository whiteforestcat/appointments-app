import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const DisplayAllAppoinments = () => {
  const [allAppointments, setAllAppointments] = useState(false);
  const [allAppointmentsDetails, setAllAppointmentsDetails] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/allusers");
      const data = await res.json();
      setAllAppointmentsDetails(
        data.map((element, index) => {
          return (
            <div key={index}>
              <h3>
                Title: {element.title} with {element.with}
              </h3>
              <h5>Date: {element.date}</h5>
              <h5>Start: {element.start}</h5>
              <h5>End: {element.end}</h5>
            </div>
          );
        })
      );
    } catch (error) {
      console.log("FETCH FAIL!!!", error.message);
    }
  };

  const handleClick = () => {
    getData();
    setAllAppointments(!allAppointments);
  };

  return (
    <>
      <button onClick={handleClick}>All Appointments</button>
      {allAppointments && (
        <ErrorModal
          title="All Appointments"
          allAppointmentsDetails={allAppointmentsDetails}
          okayClicked={() => setAllAppointments(!allAppointments)}
        />
      )}
    </>
  );
};

export default DisplayAllAppoinments;
