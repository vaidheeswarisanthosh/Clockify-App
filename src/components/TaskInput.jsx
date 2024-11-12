import { useTimeTracker } from '../context/TimeTrackerContext';

function TaskInput() {
  const { taskDescription, setTaskDescription, setMode } = useTimeTracker();

  return (
    <div className="input">
      <input
        type="text"
        placeholder="What are you working on?"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <div className="mode-toggle">
        <button onClick={() => setMode('timer')}>Timer Mode</button>
        <button onClick={() => setMode('manual')}>Manual Mode</button>
      </div>
    </div>
  );
}

export default TaskInput;
