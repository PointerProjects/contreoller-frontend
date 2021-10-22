import React from 'react';
import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Properties() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.propertiesContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Imóveis</h1>
      </div>
    </div>
  );
}
