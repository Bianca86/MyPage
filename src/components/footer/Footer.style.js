import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../custom/Colors";

export const Container = styled.div`
  left: 0;
  right: 0;
  top: 0;
  background-color: ${colors.main};
  padding: 5px 5px;
  background-image: linear-gradient(#fffbff, #d3ab9e);
`;

export const Button = styled.div`
  display: none;
  span {
    font-size: 17px;
    display: block;
    padding: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin: auto;
  font-size: 1.5rem;
`;

export const Text = styled.div`
  display: block;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    ${Button} {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Add = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 10px;
  font-size: 1.2rem;
  span {
    font-size: 17px;
    display: auto;
    padding: 1px 5px;
    justify-content: center;
  }
`;

export const Disclaimer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 10px;
  font-size: 0.8rem;
  color: ${colors.disc};
`;
