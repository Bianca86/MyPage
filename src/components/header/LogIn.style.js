import styled from "styled-components";
import { colors } from "../custom/Colors";
export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${colors.background};
  background-image: linear-gradient(#eac9c1, #fffbff);
  width: 100%;
  min-height: 60vh;
  justify-content: center;
`;

export const LogLinks = styled.div`
  width: 100%;
  max-width: 380px;
  box-shadow: ${colors.cta};
  padding: 20px;
  color: ${colors.text};
  border-radius: 15px;
  font-family: sans-serif;
  font-style: italic;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-self: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

export const Cart = styled.div`
  background-image: linear-gradient(#fffbff, #eac9c1);
  padding: 20px;
  border-radius: 0 15px 0 15px;
  margin: auto;
  box-sizing: border-box;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: ${colors.text};
    font-style: none;
  }
`;

export const Logo = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  img {
    border-radius: 50%;
    opacity: 60%;
    padding: 5px;
    max-width: 130px;
  }
`;

export const Input = styled.div`
  border-radius: 30px;
  width: 70%;
  padding: 15px;
  box-sizing: content-box;
  border: grey 2px solid;
  margin-bottom: 8px;
  text-align: center;
  display: block;
`;

export const Button = styled.span`
  width: 70%;
  max-width: 320px;
  padding: 10px 15px;
  color: ${colors.text};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 30px;
`;

export const Error = styled.p`
  color: red;
  margin: 1rem 0;
`;
