import { createContext, useContext, useState, useEffect } from 'react';

const TimeTrackerContext = createContext();

export function TimeTrackerProvider({ children }) {  //children prop represents all the components wrapped inside TimeTrackerProvider
  const [mode, setMode] = useState('timer'); // 'timer' or 'manual'
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [entries, setEntries] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartStop = () => {
    if (isRunning) {
      setEntries([...entries, { mode: 'Timer', task: taskDescription, time }]);
      setIsRunning(false);
      setTime(0);
      setTaskDescription('');
    } else {
      setIsRunning(true);
    }
  };

  const handleAddManualEntry = (hours, minutes, seconds) => {
    const manualTime = hours * 3600 + minutes * 60 + seconds;
    setEntries([...entries, { mode: 'Manual', task: taskDescription, time: manualTime }]);
    setTaskDescription('');
  };

  const handleDeleteEntry = index => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const formatTime = totalSeconds => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <TimeTrackerContext.Provider
      value={{
        mode,
        setMode,
        isRunning,
        time,
        entries,
        taskDescription,
        setTaskDescription,
        handleStartStop,
        handleAddManualEntry,
        handleDeleteEntry,
        formatTime,
      }}
    >
      {children}
    </TimeTrackerContext.Provider>
  );
}

export function useTimeTracker() {
  return useContext(TimeTrackerContext);
}
