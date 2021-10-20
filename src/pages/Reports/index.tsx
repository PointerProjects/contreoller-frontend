import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Reports() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.reportsContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Relatórios</h1>
      </div>
    </div>
  );
}
