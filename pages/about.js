import styled from "styled-components";
import { NextSeo } from "next-seo";
export default function Contact() {
  return (
    <AboutContainer>
      <NextSeo
        title={"Blippy Jacob | Contact"}
        canonical={"https://blippyjacob.com/contact"}
        openGraph={{
          url: "https://blippyjacob.com/contact",
          title: "Blippy Jacob | Contact",
        }}
      />
      <SquareOne></SquareOne>
      <SquareTwo></SquareTwo>
      <HeroContainer>
        <h1>A Little About Myself</h1>
        <img src="./profilephoto.jpg" />
      </HeroContainer>
      <AboutContainer__Info>
        <h1>About Me</h1>
        <div className="about">
          Hi! I'm blippyjacob, but you can also call me just Blippy or Jacob! I
          am 17 years old and have been editing for about three years and about
          eight months of client work. I use Premiere Pro to edit, but I am
          fluent in the entire Adobe Creative Cloud, so if you need something
          done in Photoshop and After Effects, I can also do that! I would say
          that I am best at Livestream highlights because that's what I've done
          the most; however, I have also edited some prerecorded content before,
          so it's not out of my skill level.
        </div>
      </AboutContainer__Info>
    </AboutContainer>
  );
}
const AboutContainer__Info = styled.div`
  color: #9053a5;
  h1 {
    text-align: center;
  }

  margin-bottom: 50vh;
`;
const HeroContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 50vh;
  color: white;
  @media (max-width: 800px) {
    grid-template-rows: 0.5fr;
    grid-template-columns: auto;
  }

  h1:nth-child(1) {
    @media (max-width: 800px) {
      grid-row: 2;
    }
    grid-row: 3;
    grid-column: 2/4;
  }

  img {
    position: absolute;

    border-radius: 50%;
    grid-row: 2;
    grid-column: 4/6;
    width: 300px;

    @media (max-width: 800px) {
      top: 100px;
      left: 50%;
      margin-left: -100px;
      grid-row: 2;
      grid-column: 1;
      width: 200px;
    }
  }
  margin-bottom: 100px;
`;
const AboutContainer = styled.div`
  font-family: azo-sans-web, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 1.3rem;
  position: relative;

  .about {
    padding: 2rem;
    font-weight: 300;
    max-width: 1000px;
    margin: auto;
    color: black;
  }
`;

const SquareOne = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 70vh;
  background: #9053a5;
  background: linear-gradient(124.32deg, #9053a5 24.47%, #441056 82.24%);
  transform: rotate(-13.35deg);
  transform: skewY(-8deg);
  transform-origin: 0;
`;

const SquareTwo = styled.div`
  position: absolute;
  top: -40vh;
  left: 0;
  width: 100%;
  height: 70vh;
  background: #9053a5;
  background: linear-gradient(124.32deg, #9053a5 30.1%, #441056 87.86%);
  mix-blend-mode: multiply;
  transform: rotate(16.74deg);
  transform: skewY(8deg);
  transform-origin: 0;
`;
