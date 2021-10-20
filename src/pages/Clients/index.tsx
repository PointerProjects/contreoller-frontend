import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Clients() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.clientsContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Clientes</h1>
      </div>
    </div>
  );
}
