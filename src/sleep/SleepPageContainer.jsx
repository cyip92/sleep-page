import Navbar from "../common/Navbar";

import SleepFAQ from "./SleepFAQ";
import SleepInfo from "./SleepInfo";
import WeekTable from "./WeekTable";
import TimeInput from "./TimeInput";
import "./styles/SleepPageContainer.css";

export const SleepPageContainer = () => {
  return (
    <>
      <div className="c-page-layout">
        <Navbar />
        <br />
        <h1>Weekly Sleep Pattern</h1>
        <WeekTable />
        <div className="c-text-elements">
          <SleepInfo />
          <br />
          <TimeInput />
        </div>
        <div className="o-divider" />
        <div className="c-faq">
          <SleepFAQ />
        </div>
      </div>
    </>
  )
}

export default SleepPageContainer;