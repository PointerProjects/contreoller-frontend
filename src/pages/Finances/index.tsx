import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

export function Finances() {
  const { sideBar } = useContext(MenuContext);

  return (
    <div className={styles.financesContainer}>
      <NavBar />
      <div className={sideBar ? styles.main : styles.mainMenu}>
        <h1>Financeiro</h1>
      </div>
    </div>
  );
}
