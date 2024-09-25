import React, { useState, useContext, useEffect } from "react";
import "./App.css";
// import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";

import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import Day from "./components/Day";
import Week from "./components/week"; // Import the login page
import Month from "./components/Month";
import { getMonth, getWeek, getDay } from "./util";
import dayjs from "dayjs";


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, daySelected, showEventModal } = useContext(GlobalContext);
  const [viewState, setViewState] = useState("Month");

  useEffect(() => {
    if (viewState === "Month") {
      setCurrentMonth(getMonth(monthIndex));
    }
  }, [monthIndex, viewState]);
  
  const currentDay = daySelected || getDay();
  const daysInWeek = getWeek(null, daySelected ? daySelected.month() : dayjs().month());

  


  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader setViewState={setViewState} />
        <div className="flex flex-1">
          <Sidebar />
          {viewState === "Month" && <Month month={currentMonth} />}
          {viewState === "Week" && <Week daysInWeek={daysInWeek} />}
          {viewState === "Day" && <Day day={currentDay} rowIdx={0} />}
        </div>
      </div>
    </React.Fragment>
  );
}


export default App;