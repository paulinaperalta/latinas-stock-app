import React, { useState } from "react";
// import ReactDOM from "react-dom";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "usuario1",
      password: "1234"
    },
    {
      username: "usuario2",
      password: "1234"
    }
  ];

  const errors = {
    uname: "Usuario incorrecto",
    pass: "PIN incorrecto"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        localStorage.setItem("uname", uname);
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Ingresa tu nombre</label>
          <input type="text" name="name"></input>
          <label>Ingresa tu usuario</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Ingresa tu PIN</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <button className="buttonLogin" type="submit">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">¡Bienvenida!</div>
        {isSubmitted ? (
          <div>Has iniciado sesión correctamente</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
