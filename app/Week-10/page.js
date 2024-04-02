import React from "react";
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <br/>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      )}
    </div>
  );
};

export default Page;
