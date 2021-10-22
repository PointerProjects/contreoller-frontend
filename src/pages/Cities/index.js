import React from 'react';
import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Cities() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.citiesContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Cidades</h1>
      </div>
    </div>
  );
}
