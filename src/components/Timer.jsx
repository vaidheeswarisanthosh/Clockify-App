import { useTimeTracker } from '../context/TimeTrackerContext';

function Timer() {
  const { mode, time, formatTime, isRunning, handleStartStop } = useTimeTracker();

  if (mode !== 'timer') return null;

  return (
    <div className="timer-mode">
      <p>{formatTime(time)}</p>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default Timer;
