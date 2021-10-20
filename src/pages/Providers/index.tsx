import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Providers() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.providersContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Fornecedores</h1>
      </div>
    </div>
  );
}
