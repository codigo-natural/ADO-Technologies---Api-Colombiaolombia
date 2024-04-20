import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const authUser = useSelector((state) => state.auth.user);
  return (
    <nav>
      <h1>ADO Technologies</h1>
      <div className={styles.right}>
        {authUser ? (
          <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/atractions">Atractions</Link>
          <Link to="/profile">Welcome {authUser.username}</Link>
          </>
        ) : (
          <Link to="/auth-user">Auth User</Link>
        )}
      </div>
    </nav>
  );
};
