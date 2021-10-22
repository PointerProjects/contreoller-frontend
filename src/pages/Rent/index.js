import React from 'react';
import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Rent() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.rentContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Aluguéis</h1>
      </div>
    </div>
  );
}
