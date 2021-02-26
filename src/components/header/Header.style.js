import styled from "styled-components";
import { colors } from "../custom/Colors";

export const Header = styled.header`
  background-color: ${colors.background};
  //background-image: linear-gradient(${colors.background}, ${colors.cta});
  background-image: linear-gradient(#fffbff, #eac9c1);
  top: 0;
  left: 0;
  right: 0;
  position: sticky;
  z-index: 1;
  display: flex;
`;
export const Logo = styled.div`
  width: 10%;
  margin: 0;
  img {
    border-radius: 50%;
    opacity: 60%;
    padding: 5px;
    max-width: 95px;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Motto = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  padding-right: 15px;
  font-style: italic;
  font-size: 45px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 3px;
  left: 0;
  right: 0;
  top: 0;
`;

export const Info = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 1px;
  li {
    color: ${colors.text};
    font-style: italic;
    list-style: none;
  }
`;
