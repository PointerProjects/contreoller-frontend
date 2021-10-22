import React from 'react';
import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function About() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.aboutContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Sobre</h1>
      </div>
    </div>
  );
}
