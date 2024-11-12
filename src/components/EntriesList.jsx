import { useTimeTracker } from '../context/TimeTrackerContext';

function EntriesList() {
  const { entries, formatTime, handleDeleteEntry } = useTimeTracker();

  return (
    <ul className="entries-list">
      <h3 className='headings'>ENTRIES</h3>
      {entries.map((entry, index) => (
        <li key={index} className="entry-item">
          <strong>{entry.task || 'Untitled Task'}</strong> - {entry.mode}: {formatTime(entry.time)}
          <button onClick={() => handleDeleteEntry(index)} className="delete-button">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EntriesList;
