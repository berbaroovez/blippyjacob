import styled from "styled-components";
import React from "react";
const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  position: relative;
  z-index: 999;
  top: 20px;
  left: 20px;

  border: none;
  background: ${({ theme }) => theme.body};
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>{theme === "light" ? "🌚" : "🌞"}</Button>
  );
};

export default Toggle;
