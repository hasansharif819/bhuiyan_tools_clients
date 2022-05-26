import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h2 className='text-5xl text-primary'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label for="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>My Profile</Link></li>
      <li><Link to='/dashboard/myreview'>My Review</Link></li>
      <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
      <li><Link to='/dashboard/users'>users</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;