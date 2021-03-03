import styled from "styled-components";
import Link from "next/link";
export default function Navbar() {
  return (
    <NavContainer>
      <p className="testimonies">
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Link href="/" className="logo">
        <a>
          <Nav__Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 195.068 235.322"
            >
              <path
                className="bLetter"
                d="M0 0h53.761c27.6 0 44.641 3.12 56.641 9.84 12.481 6.961 20.881 18.24 20.881 33.84 0 16.32-9.36 26.881-26.4 33.361v.48c24.241 8.16 33.6 23.52 33.6 42.721 0 20.16-10.32 35.761-30.24 44.641-13.2 6-30.721 8.88-51.842 8.88H.001zm60 69.362c14.881 0 21.841-4.56 21.841-15.121 0-5.52-1.92-9.6-7.2-12.24-3.6-1.92-9.121-2.64-19.441-2.64h-5.759v30zm-3.36 65.041c14.161 0 21.361-1.2 25.441-3.36 4.8-2.64 6.96-6.96 6.96-13.2 0-11.761-8.16-16.8-24-16.8h-15.6v33.361z"
                fill="#fff"
              />
              <path
                className="jLetter"
                d="M149.748 73.622h45.32v104.72c0 22.44-4.62 34.32-12.98 42.461-9.9 9.9-23.981 14.519-40.92 14.519a74.758 74.758 0 01-23.981-3.96V191.98c6.161 2.2 14.3 3.96 19.361 3.96 11 0 13.2-5.719 13.2-17.16z"
                fill="#fff"
              />
            </svg>
          </Nav__Logo>
        </a>
      </Link>
      <p className="contact">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </p>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 300px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 30px;

  z-index: 20;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-evenly;

  text-align: center;

  color: white;
  font-family: azo-sans-web, sans-serif;
  font-weight: 900;
  font-style: normal;
  text-transform: uppercase;

  .contact {
    margin-left: -10px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #9053a5;
  }
`;

const Nav__Logo = styled.div`
  margin: auto;
  padding-top: 8px;
  svg {
    width: 34px;
    height: 35px;
  }
  .bLetter:hover {
    fill: #9053a5;
  }
  .jLetter:hover {
    fill: #9053a5;
  }
`;
