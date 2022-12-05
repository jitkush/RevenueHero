import { useRef, useState } from "react";
import "./App.css";
import MyCalender from "./component/calender";
import ConfirmationForm from "./component/confirmationForm";
import TimeCard from "./component/timeCard";
import { BsFillClockFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
const App = () => {
  const [finalDate, setFinal] = useState();

  const setFinalDate = (data) => {
    setFinal(data);
  };

  const resetData = () => {
    setFinal();
  };

  return (
    <main className="App">
      <div className="appContainer">
        <div className="meetingIinfo">
          <span className="mmm"> conferencing confirmation</span>
          <div className="meetingTitle">Meeting With RevenueHero</div>
          <div
            className="iconParent"
            style={{
              display: "flex",
            }}
          >
            <BsFillClockFill color={"#868686"} fontSize={"1.8rem"} />
            <span className="mmm">&nbsp; 30min</span>
          </div>
          <div
            className="iconParent"
            style={{
              display: "flex",
            }}
          >
            <FaVideo color={"#868686"} fontSize={"2.5rem"} />
            <span className="mmm">
              &nbsp;Web conferencing details provided upon confirmation.
            </span>
          </div>
        </div>
        <div className="actionArea">
          {!finalDate ? (
            <div className="Calender">
              <MyCalender getUpdatedDate={setFinalDate} />
            </div>
          ) : (
            <div className="Calender">
              <ConfirmationForm date={finalDate} back={resetData} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
