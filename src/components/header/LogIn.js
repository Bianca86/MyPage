import React from "react";
import { Link } from "react-router-dom";
import { Cart, LogLinks, Nav, Logo, Input, Button, Error } from "./LogIn.style";
import aqc1 from "../custom/img/aqc1.jpg";
import aqc2 from "../custom/img/aqc2.jpg";
import { useState } from "react";

const LogIn = ({ LogUser }) => {
  const [values, setValues] = useState({
    email: "random_mail@random.com",
    pass: "parola",
  });

  function handleEmailChange(val) {
    setValues({
      ...values,
      email: val,
    });
  }

  function handlePasswordChange(val) {
    setValues({
      ...values,
      pass: val,
      error: "",
    });
  }

  function handleSubmit() {
    if (values.email === "random_mail@random.com" && values.pass === "parola") {
      LogUser();
    } else {
      setValues({
        ...values,
        error: "Email sau parola incorecte.",
      });
    }
  }

  return (
    <Nav>
      <LogLinks>
        <Link to="/login">
          <Logo>
            <img src={aqc1}></img>
            <img src={aqc2}></img>
          </Logo>

          <Cart>
            <h3>Logare creditor/ debitor</h3>
            {values.error !== "" && <Error>{values.error}</Error>}
            <Input
              type="email"
              placeholder="Adresa de e-mail"
              value={values.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <Input
              type="password"
              placeholder="Parola"
              value={values.pass}
              onChange={(e) => handlePasswordChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />

            <Button onClick={() => handleSubmit()}>Acceseaza contul</Button>

            <Link to="/" exact>
              <Button onClick>Înapoi la pagina principală</Button>
            </Link>
          </Cart>
        </Link>
      </LogLinks>
    </Nav>
  );
};

export default LogIn;
