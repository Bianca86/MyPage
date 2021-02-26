import React from "react";
import { Link } from "react-router-dom";
import { Cart, LogLinks, Nav, Logo, Input, Button } from "./LogIn.style";
import aqc1 from "../custom/img/aqc1.jpg";
import aqc2 from "../custom/img/aqc2.jpg";

const LogIn = () => {
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
            <Input type="E-mail" placeholder="E-mail" />
            <Input type="Password" placeholder="Parola" />

            <Button onClick>Acceseaza contul</Button>

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
