import EntriesList from "./EntriesList";
import ManualEntry from "./ManualEntry";
import TaskInput from "./TaskInput";
import Timer from "./Timer";


function TimeTracker() {
    return (
      <div className="time-tracker-section">
        <h1>Clockify</h1>
         <TaskInput/>
        <Timer/>
        <ManualEntry/>
         <EntriesList/>
      </div>
    );
  }

  export default TimeTracker;