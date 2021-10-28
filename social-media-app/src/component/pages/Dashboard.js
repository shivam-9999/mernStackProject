import React from "react";
import { logoutUser } from "../../redux/Actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";


function Dashboard() {
  const history = useHistory()
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <div>
      Dashboard
      <button onClick={logout}>logoutUser</button>
    </div>
  );
}

export default Dashboard;
