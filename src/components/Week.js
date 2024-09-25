import React from "react";
import Day from "./Day";

export default function Week({ daysInWeek }) {
  return (
    <div className="flex-1 grid grid-cols-7">
      {daysInWeek.map((day, idx) => 
      {
        console.log(day, idx)
        return(
        <Day day={day} key={idx} rowIdx={'0'} />
      )})}
    </div>
  );
}