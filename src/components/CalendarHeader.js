import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import SearchModal from "./SearchModal";
import HelpModal from "./HelpModal"; 
import SettingsModal from "./SettingsModal"; 
import { useNavigate } from "react-router-dom";

export default function CalendarHeader({ setViewState }) {
  const { monthIndex, setMonthIndex, setDaySelected } = useContext(GlobalContext);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [viewType, setViewType] = useState("Month");

    // const navigate = useNavigate();
  
    // const handleLogin = () => {
    //   // Perform login logic here
    //   // Once successful, redirect to calendar
    //   navigate("/Login");
    // };
  
  
  function handlePrev() {
    if (viewType === "Month") {
      setMonthIndex(monthIndex - 1);
    } else if (viewType === "Week") {
      const prevWeek = dayjs().add(-7, 'day');
      setDaySelected(prevWeek);
    } else if (viewType === "Day") {
      const prevDay = dayjs().add(-1, 'day');
      setDaySelected(prevDay);
    }
  }

  function handleNext() {
    if (viewType === "Month") {
      setMonthIndex(monthIndex + 1);
    } else if (viewType === "Week") {
      const nextWeek = dayjs().add(7, 'day');
      setDaySelected(nextWeek);
    } else if (viewType === "Day") {
      const nextDay = dayjs().add(1, 'day');
      setDaySelected(nextDay);
    }
  }

  function handleTodayClick() {
    const today = dayjs();
    setMonthIndex(today.month()); // Set the month index to current month
    setDaySelected(today); // Select today's date
  }

  function handleViewChange(e) {
    setViewType(e.target.value);
    setViewState(e.target.value);
  }

  return (
    // <header className="px-4 py-2 flex items-center">
    //   {/* Other parts of the header */}

    //   <button onClick={handleTodayClick} className="bg-blue-500 text-white px-2 py-2 rounded">
    //     Today
    //   </button>

    //   <button onClick={handlePrev}>
    //     <span className="material-icons-outlined cursor-pointer text-white-600 mx-2">
    //       chevron_left
    //     </span>
    //   </button>
    //   <button onClick={handleNext}>
    //     <span className="material-icons-outlined cursor-pointer text-white-600 mx-2">
    //       chevron_right
    //     </span>
    //   </button>

    //   <h2 className="ml-4 text-xl text-white-600 font-bold">
    //     {viewType === 'Month'
    //       ? dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")
    //       : dayjs().format("MMMM D, YYYY")}
    //   </h2>

    //   {/* View Switcher */}
    //   <select
    //     value={viewType}
    //     onChange={handleViewChange}
    //     className="select-custom"
    //   >
    //     <option value="Day">Day</option>
    //     <option value="Week">Week</option>
    //     <option value="Month">Month</option>
    //   </select>

    //   {/* Modals */}
    //   {showSearchModal && <SearchModal onClose={() => setShowSearchModal(false)} />}
    //   {showHelpModal && <HelpModal onClose={() => setShowHelpModal(false)} />}
    //   {showSettingsModal && <SettingsModal onClose={() => setShowSettingsModal(false)} />}
    // </header>
    <header className="px-4 py-2 flex items-center">
      {/* Menu Icon */}
      <span className="material-icons-outlined cursor-pointer text-gray-600 mr-2">
        menu
      </span>
      <img src="/calendar-icon.png" alt="Calendar Logo" className="mr-2" />
      <h1 className="mr-10 text-xl text-White-600 font-bold">Calendar</h1>

      <button onClick={handleTodayClick} className="bg-blue-500 text-white px-2 py-2 rounded">
          Today
        </button>

      <button onClick={handlePrev}>
        <span className="material-icons-outlined cursor-pointer text-white-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNext}>
        <span className="material-icons-outlined cursor-pointer text-white-600 mx-2">
          chevron_right
        </span>
      </button>

      <h2 className="ml-4 text-xl text-white-600 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>

      <div className="flex-grow"></div>

      {/* Search Icon */}
      <span
        className="material-icons-outlined cursor-pointer text-white-600 mx-2"
        onClick={() => setShowSearchModal(true)} // Open search modal
      >
        search
      </span>

      {/* Help Icon */}
      <span
        className="material-icons-outlined cursor-pointer text-white-600 mx-2"
        onClick={() => setShowHelpModal(true)} // Open help modal
      >
        help_outline
      </span>

      {/* Settings Icon */}
      <span
        className="material-icons-outlined cursor-pointer text-white-600 mx-2"
        onClick={() => setShowSettingsModal(true)} // Open settings modal
      >
        settings
      </span>

      {/* View Switcher */}
      {/* View Switcher */}
      <select
  value={viewType}
  onChange={handleViewChange}
  className="select-custom"
>
  <option value="Day" >Day</option>
  <option value="Week" >Week</option>
  <option value="Month">Month</option>
</select>
{/* <button vonClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
      Login
</button> */}


      {/* Search Modal */}
      {showSearchModal && <SearchModal onClose={() => setShowSearchModal(false)} />}
      
      {/* Help Modal */}
      {showHelpModal && <HelpModal onClose={() => setShowHelpModal(false)} />}

      {/* Settings Modal */}
      {showSettingsModal && <SettingsModal onClose={() => setShowSettingsModal(false)} />}
    </header>
  );
}
