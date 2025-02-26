
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import { TimeTrackerProvider } from './context/TimeTrackerContext';
import './App.css';
import TimeTracker from './components/TimeTracker';
import ReportSection from './components/ReportSection';
import Navbar from './components/Navbar';



function App() {
  const DashboardLayout = () => (
    <TimeTrackerProvider>
      <div className="app flex">
        <Sidebar />
        <div className="main-content flex-grow p-6">
          <Outlet /> {/*This will render the nested route component */}
        </div>
      </div>
    </TimeTrackerProvider>
  );
  return (
    // <TimeTrackerProvider>
    //   <Router>
    //     <div className="app">
          
    //       <Sidebar />
    //       <div className="main-content">
    //         <Routes>
    //         <Route path="/" element={<TimeTracker />} />
    //         <Route path="/report" element={<ReportSection/>} />
    //         </Routes>
    //       </div>
    //     </div>
    //   </Router>
    // </TimeTrackerProvider>
   

    <Router>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Register />} />
       <Route path="/login" element={<Login />} />
        {/* Dashboard with Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<TimeTracker />} /> {/* Default page */}
          <Route path="report" element={<ReportSection />} />
        </Route>
    </Routes>
  </Router>
  );
}



export default App;





