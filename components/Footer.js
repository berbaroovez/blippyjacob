import styled from "styled-components";
import Link from "next/link";
export default function Footer() {
  return (
    <FooterContainer>
      <div className="Navigation">
        <p>Navigation</p>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Contact">
        <p>Contact</p>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg__icon"
            >
              <path d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z" />
            </svg>

            <a href="mailto:jhgittelman@gmail.com">jhgittelman@gmail.com</a>
          </li>

          <li>
            <svg
              className="svg__icon"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 245 240"
            >
              <path
                className="st0"
                d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
              />
              <path
                className="st0"
                d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
              />
            </svg>
            blippyjacob#3005
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="svg__icon"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
            </svg>

            <a href=" https://twitter.com/blippyjacob">blippyjacob</a>
          </li>
        </ul>
      </div>
      <div className="Builder">
        <p>Built by</p>
        <p className="berb">
          <a href="https://twitter.com/berbaroovez">Berbaroovez</a> with ✨from
          Chicago
        </p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #27163e;
  border-radius: 20px 20px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: azo-sans-web, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: auto;
  }

  .svg__icon {
    width: 20px;
    fill: white;
    margin-right: 5px;
  }

  ul {
    list-style: none;
  }
  li {
    margin: 10px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  div p {
    text-align: center;

    font-family: azo-sans-web, sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .berb {
    font-weight: 300;
  }
  .berb a {
    color: white;
  }
`;

// <!DOCTYPE html>
// <meta charset="utf-8">
// <style>

// svg {
//   display: block;
//   height: 400px;
//   margin: 50px auto;
// }

// </style>
<svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
  <path
    d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
    v
    style="fill:#3BA9EE;"
  />
</svg>;
