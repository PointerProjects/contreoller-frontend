import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Login() {
  return (
    <div className='login'>
      <h1>Login</h1>
      <p>Em construção...</p>
      <Link to='/'>
        <button>Entrar</button>
      </Link>
    </div>
  );
}

export default Login;
