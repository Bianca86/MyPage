import React from "react";
import {
  Header as FixElement,
  Container,
  Logo,
  Motto,
  Details,
  Info,
} from "./Header.style";
import aqc1 from "../custom/img/aqc1.jpg";
import Typewritter from "typewriter-effect";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <FixElement>
      <Logo>
        <img src={aqc1}></img>
      </Logo>

      <Container>
        <Details>
          <Motto>
            <Typewritter
              onInit={(typewritter) => {
                typewritter
                  .typeString("Partenerul tău în insolvenţă")
                  .pauseFor(2500)
                  .deleteAll()
                  .changeDeleteSpeed("natural")
                  .pauseFor(1500)
                  .start();
              }}
              options={{
                autoStart: true,
                delay: 75,
                loop: true,
              }}
            />
          </Motto>
        </Details>

        <Details>
          <Info>
            <DropdownButton id="dropdown-basic-button" title="Despre noi">
              <Dropdown.Item href="#/action-1">
                Asociatii coordonatori
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Echipa</Dropdown.Item>
            </DropdownButton>
          </Info>

          <Info>
            <DropdownButton id="dropdown-basic-button" title="Servicii">
              <Dropdown.Item href="#/action-1">
                Consultanţă pre-insolvenţă
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Insolvenţă</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Faliment</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Servicii conexe</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Altele</Dropdown.Item>
            </DropdownButton>
          </Info>

          <Info>
            <DropdownButton id="dropdown-basic-button" title="Portofoliu">
              <Dropdown.Item href="#/action-1">Obsservaţie</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Reorganizare</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Faliment</Dropdown.Item>
            </DropdownButton>
          </Info>

          <Info>
            <DropdownButton id="dropdown-basic-button" title="Licitaţii">
              <Dropdown.Item href="#/action-1">Bunuri mobile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bunuri imobile</Dropdown.Item>
            </DropdownButton>
          </Info>

          <Info>
            <DropdownButton id="dropdown-basic-button" title="Contact">
              <Dropdown.Item href="#/action-1">Timişoara</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Filiala Hunedoara</Dropdown.Item>
            </DropdownButton>
          </Info>

          <Info>
            <Link to="/login">
              <li>Log in</li>
            </Link>
          </Info>
        </Details>
      </Container>
    </FixElement>
  );
};

export default Header;
