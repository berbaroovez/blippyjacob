import styled from "styled-components";

import { useRouter } from "next/router";

export default function FancyButton() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/contact");
  };
  return <ButtonContainer onClick={handleClick}>Lets Work</ButtonContainer>;
}

const ButtonContainer = styled.button`
  position: relative;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border: 2px solid #7a38a9;
  border-radius: 10px;

  background: #431f5d;
  grid-row: 4;
  grid-column: 2;

  color: white;
  font-family: azo-sans-web, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 1.3rem;

  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #b151f5;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #7a38a9, 0 0.425em 0 0 #c98cf4;
    transform: translate3d(0, 0.55em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    background: #3f175d;
    transform: translate(0, 0.25em);

    &::before {
      box-shadow: 0 0 0 2px #7a38a9, 0 0.5em 0 0 #c98cf4;
      transform: translate3d(0, 0.5em, -1em);
    }
  }

  &:active {
    background: #3f175d;
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px #7a38a9, 0 0 #c98cf4;
      transform: translate3d(0, 0, -1em);
    }
  }
`;
