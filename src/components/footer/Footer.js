import React from "react";
import {
  Container,
  Content,
  Add,
  Disclaimer,
  Text,
  Button,
} from "./Footer.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faAd, faAt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Text>
          <p>Contact</p>
          <Button>
            <span>Telefon: 0256 222 222</span>
            <span>Email: alfaquantum@email.com</span>
          </Button>
        </Text>

        <Text>
          <p>Linkuri utile</p>
          <Button>
            <span>Legea 85/2014</span>
            <span>Legea 85/2006</span>
            <span>Codul de procedură civilă</span>
          </Button>
        </Text>

        <Text>
          <p>Locaţii</p>
          <Button>
            <span>Timişoara</span>
            <span> Hunedoara</span>
          </Button>
        </Text>
      </Content>

      <Add>
        Follow us on
        <span>
          <FontAwesomeIcon icon={faSmile} />
        </span>
        <span>
          <FontAwesomeIcon icon={faAd} />
        </span>
        <span>
          <FontAwesomeIcon icon={faAt} />
        </span>
      </Add>
      <Disclaimer>
        Alfa & Quantum Consulting SPRL © 2021. Toate drepturile rezervate.
      </Disclaimer>
    </Container>
  );
};

export default Footer;
