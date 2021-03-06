import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();
	
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <div>
      <button onClick={onLogOutClick}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
