
import ReportChart from './ReportChart';
import { useTimeTracker } from '../context/TimeTrackerContext';

const ReportSection = () => {
  const { entries } = useTimeTracker();

  return (
    <div className="report-section p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Time Report</h2>
      
      {/* Report Chart */}
      {entries.length > 0 ? (
        <ReportChart entries={entries}  />
      ) : (
        <p className='text-gray-600' >No entries available. Start tracking time to generate reports.</p>
      )}
    </div>
  );
};

export default ReportSection;
