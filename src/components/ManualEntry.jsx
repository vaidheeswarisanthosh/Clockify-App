import { useState } from 'react';
import { useTimeTracker } from '../context/TimeTrackerContext';

function ManualEntry() {
  const { handleAddManualEntry, mode } = useTimeTracker();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  if (mode !== 'manual') return null;

  const handleAdd = () => {
    handleAddManualEntry(hours, minutes, seconds);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="manual-mode">
      <label>Hours: <input type="number" value={hours} onChange={(e) => setHours(Number(e.target.value))} /></label>
      <label>Minutes: <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} /></label>
      <label>Seconds: <input type="number" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} /></label>
      <button onClick={handleAdd}>Add Entry</button>
    </div>
  );
}

export default ManualEntry;
