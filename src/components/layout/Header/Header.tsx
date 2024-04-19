import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <nav>
      <h1>ADO Technologies</h1>
      <div className={styles.right}>
        <Link to="/auth-user">Auth User</Link>
      </div>
    </nav>
  );
};
