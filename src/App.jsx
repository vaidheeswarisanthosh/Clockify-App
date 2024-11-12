
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { TimeTrackerProvider } from './context/TimeTrackerContext';
import './App.css';
import TimeTracker from './components/TimeTracker';
import ReportSection from './components/ReportSection';


function App() {
  return (
    <TimeTrackerProvider>
      <Router>
        <div className="app">
          
          <Sidebar />
          <div className="main-content">
            <Routes>
            <Route path="/" element={<TimeTracker />} />
            <Route path="/report" element={<ReportSection/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </TimeTrackerProvider>
  );
}



export default App;
