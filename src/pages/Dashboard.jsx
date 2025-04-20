// src/pages/Dashboard.jsx
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Welcome, {user?.username}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
