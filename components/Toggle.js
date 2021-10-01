import styled from "styled-components";
import React from "react";
const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 10px;
  position: relative;
  z-index: 999;
  top: 20px;
  left: 20px;
  width: 45px;
  border: none;
  background: ${({ theme }) => theme.body};
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>{theme === "light" ? "🌚" : "🌞"}</Button>
  );
};

export default Toggle;
