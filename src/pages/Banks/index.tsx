import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Banks() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.banksContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Bancos</h1>
      </div>
    </div>
  );
}
