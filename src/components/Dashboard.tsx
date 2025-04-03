import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isAuthenticated")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
