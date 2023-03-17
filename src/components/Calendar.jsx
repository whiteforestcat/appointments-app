import React, { useRef, useState } from "react";

const Calendar = () => {
  //   const [storeDate, setStoreDate] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [filteredDates, setFilteredDates] = useState(null);
  let storeDate = "";

  const filterDate = async (storeDate) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/searchbydate", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          // "Authorization": "Bearer <token>"
        },
        body: JSON.stringify({
          // date: "2023-01-01",
          date: `${storeDate}`,
        }),
      });
      const data = await res.json();
        console.log(data);
      setFilteredDates(
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

  const handleClick = (e) => {
    // console.log(e.target.innerText);
    // setStoreDate(e.target.innerText);
    storeDate = e.target.innerText;
    // console.log(storeDate)
    filterDate(storeDate);
    enlarge();
  };

  const enlarge = () => {
    setPopUp(true);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
        <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl shadow-xl flex flex-col">
          <div className="flex justify-between pb-4">
            <div className="-rotate-90 cursor-pointer">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.001 6L6.00098 1L1.00098 6"
                  stroke="black"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="uppercase text-sm font-semibold text-gray-600">
              january - 2022
            </span>
            <div className="rotate-90 cursor-pointer">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.001 6L6.00098 1L1.00098 6"
                  stroke="black"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
            <div className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">
              sun
            </div>

            <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              mon
            </span>

            <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              tue
            </span>

            <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              wed
            </span>

            <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              thu
            </span>

            <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              fri
            </span>

            <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              sat
            </span>
          </div>

          <div className="flex justify-between font-medium text-sm pb-2">
            <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
              30
            </span>

            <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
              31
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-01"
              onClick={handleClick}
            >
              2023-01-01
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-02"
              onClick={handleClick}
            >
              2023-01-02
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-03"
              onClick={handleClick}
            >
              2023-01-03
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-04"
              onClick={handleClick}
            >
              2023-01-04
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-05"
              onClick={handleClick}
            >
              2023-01-05
            </span>
          </div>
          <div className="flex justify-between font-medium text-sm pb-2">
            <span
              className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer"
              id="2023-01-06"
              onClick={handleClick}
            >
              2023-01-06
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-07"
              onClick={handleClick}
            >
              2023-01-07
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-08"
              onClick={handleClick}
            >
              2023-01-08
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-09"
              onClick={handleClick}
            >
              2023-01-09
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-10"
              onClick={handleClick}
            >
              2023-01-10
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-11"
              onClick={handleClick}
            >
              2023-01-11
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-12"
              onClick={handleClick}
            >
              2023-01-12
            </span>
          </div>

          <div className="flex justify-between font-medium text-sm pb-2">
            <span
              className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer"
              id="2023-01-13"
              onClick={handleClick}
            >
              2023-01-13
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-14"
              onClick={handleClick}
            >
              2023-01-14
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-15"
              onClick={handleClick}
            >
              2023-01-15
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-16"
              onClick={handleClick}
            >
              2023-01-16
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-17"
              onClick={handleClick}
            >
              2023-01-17
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-18"
              onClick={handleClick}
            >
              2023-01-18
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-19"
              onClick={handleClick}
            >
              2023-01-19
            </span>
          </div>

          <div className="flex justify-between font-medium text-sm pb-2">
            <span
              className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer"
              id="2023-01-20"
              onClick={handleClick}
            >
              2023-01-20
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-21"
              onClick={handleClick}
            >
              2023-01-21
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-22"
              onClick={handleClick}
            >
              2023-01-22
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-23"
              onClick={handleClick}
            >
              2023-01-23
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-24"
              onClick={handleClick}
            >
              2023-01-24
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md"
              id="2023-01-25"
              onClick={handleClick}
            >
              2023-01-25
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-26"
              onClick={handleClick}
            >
              2023-01-26
            </span>
          </div>

          <div className="flex justify-between font-medium text-sm pb-2">
            <span
              className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer"
              id="2023-01-27"
              onClick={handleClick}
            >
              2023-01-27
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-28"
              onClick={handleClick}
            >
              2023-01-28
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-29"
              onClick={handleClick}
            >
              2023-01-29
            </span>

            <span
              className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer"
              id="2023-01-30"
              onClick={handleClick}
            >
              2023-01-30
            </span>

            <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
              01
            </span>

            <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
              02
            </span>

            <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
              03
            </span>
          </div>
        </div>
      </div>
      {/* //MODAL */}
      <div
        className={popUp ? "model open" : "model"}
        onClick={() => setPopUp(false)}
      >
        <div onClick={() => setPopUp(false)}>{filteredDates}</div>
      </div>
    </div>
  );
};

export default Calendar;
