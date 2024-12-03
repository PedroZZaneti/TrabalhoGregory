import React from "react";

// Importcao de estilo
import "../styles/Perfil.css"

const LoginForm = () => {
  return (
    <div className="Login">
      <form action="">
        <h1>Faça o seu login</h1>
        <div className="Group">
            <div>
        
          <label for="email">Seu e-mail*</label>
        </div>
          <div>
          <input type="email" id="email" />
        </div>
        </div>
            
        <div className="Group">
            <div>
        <label for="password">Sua senha*</label>
          <div>
          <input type="password" id="password" />
            </div>
        </div>
        </div>
        <div>
          <p>Lembrar-me?</p>
          <input type="checkbox" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
