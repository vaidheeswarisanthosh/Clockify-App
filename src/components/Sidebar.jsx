
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken"); // Retrieve JWT Token

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try {
     
      await axios.post(
        "http://localhost:5001/api/auth/logout",
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          withCredentials: true, 
        }
      );

      localStorage.removeItem("authToken"); 
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed:", error.response?.data?.message || error.message);
    }
  };
  
  return (
    // <div className="sidebar">
    //   <h2>Clockify</h2>
    //   <nav>
    //     <ul>
    //       <li><Link to="/dashboard">Time Tracker</Link></li>
    //       <li><Link to="/dashboard/report">Report</Link></li>
    //     </ul>
    //   </nav>
    // </div>


    <div className='sidebar'>
    <div>
      <h2 className="text-2xl font-bold mb-6">Clockify</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Time Tracker
            </Link>
          </li>
          <li>
            <Link to="/dashboard/report" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Report
            </Link>
          </li>
        </ul>
      </nav>
    </div>

   {/* Logout Button */}
   <button
        onClick={handleLogout}
        className="w-full py-2 mt-6 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
  </div>
  );
}

export default Sidebar;
