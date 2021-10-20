import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <Link to="/">
        <button>Entrar</button>
      </Link>
    </div>
  );
}
