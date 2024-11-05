import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Dashboard = () => {
    const k = useLocation();
    k === '/dashboard' && useEffect(() => {
        document.title = `k | ${'baseTitle'}`;
      }, [k])
        
    return (
        <div>
            <h2>Dashboard</h2>
            
        </div>
    );
};

export default Dashboard;