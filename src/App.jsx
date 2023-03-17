import React from "react";
import { useState } from "react";
import "./App.css";
import DisplayAllAppoinments from "./components/DisplayAllAppoinments";
import Calendar from "./components/Calendar";
import Form from "./components/Form";
import Update from "./components/Update";
import Delete from "./components/Delete";

// CALENDAR IMPORTS
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timegrid from "@fullcalendar/timegrid";

function App() {
  //  DISPLAY ALL APPOINTMENTS
  const getData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/allusers");
      const data = await res.json();
      console.log(data.map((element) => element.name));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDateClick = (e) => {
    console.log("hello");
    getData();
  };

  const handleSpecificDate = (e) => {
    let title = prompt("Please enter a new title for your event");
    


  };

  return (
    <div className="App">
      {/* <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timegrid]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-02-06" },
          { title: "event 2", date: "2023-02-25" },
        ]}
        // dateClick={handleDateClick}
        selectable={true}
        select={handleSpecificDate}
      /> */}
      <Calendar />
      <DisplayAllAppoinments />
      <br />
      <Form />
      <br />
      <br />
      <Update />
      <br />
      <br />
      <Delete/>
    </div>
  );
}

export default App;
