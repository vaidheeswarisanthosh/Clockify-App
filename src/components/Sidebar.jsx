import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Clockify</h2>
      <nav>
        <ul>
          <li><Link to="/">Time Tracker</Link></li>
          <li><Link to="/report">Report</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
