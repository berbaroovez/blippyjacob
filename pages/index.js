import styled from "styled-components";
import Head from "next/head";
import { VideoList } from "../files/VideoList";
import YoutubeVid from "../components/YoutubeVid";
import { NextSeo } from "next-seo";
import FancyButton from "../components/FancyButton";
export default function Home() {
  return (
    <>
      <NextSeo
        title="Blippy Jacob | Youtube Editor"
        description="Blippy Jacob is youtube editor for Atrioc and Pointcrow"
      />

      <SquareOne></SquareOne>
      <SquareTwo></SquareTwo>
      <HomePage__HeroContainer>
        <HeroContainer__Title>BlippyJacob</HeroContainer__Title>
        <HeroContainer__SubTitle>Youtube Editor</HeroContainer__SubTitle>
        <Monitor>
          <span className="shadow"></span>
          <span className="frame"></span>
          <span className="screen"></span>
          <span className="base"></span>
          <span className="stand"></span>
        </Monitor>

        {/* <HeroContainer__CTA onClick={handleClick}>
          <CTA__Text>Lets Work</CTA__Text>
        </HeroContainer__CTA> */}
        <FancyButton />
      </HomePage__HeroContainer>

      <HomePage_VideoContainer>
        <VideoContainer__Title>Portfolio</VideoContainer__Title>

        <VideoContainer__Work>
          {VideoList
            ? VideoList.map((video) => (
                <YoutubeVid
                  title={video.title}
                  src={video.src}
                  key={video.title}
                />
              ))
            : "Loading"}
        </VideoContainer__Work>
      </HomePage_VideoContainer>
    </>
  );
}
const VideoContainer__Work = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
  align-items: end;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const VideoContainer__Title = styled.h2`
  color: #9053a5;
  font-family: azo-sans-web, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 3rem;
  text-align: center;
`;
const HomePage_VideoContainer = styled.div`
  margin: auto;
  max-width: 1000px;
  padding-top: 200px;

  @media (min-width: 600px) {
    padding: 100px;
  }
  @media (min-width: 800px) {
    padding: unset;
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

const HomePage__HeroContainer = styled.div`
  position: relative;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const HeroContainer__Title = styled.h1`
  grid-column: 2;
  grid-row: 2;
  color: white;
  font-family: azo-sans-web, sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 3rem;
`;

const HeroContainer__SubTitle = styled.h3`
  padding: 0;
  margin: 0;
  grid-column: 2;
  grid-row: 3;
  font-family: azo-sans-web, sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 2rem;
  color: #d7d7d7;
  align-self: start;
`;

const Monitor = styled.div`
  grid-column: 3;
  grid-row: 2;
  position: absolute;
  width: 600px;
  height: 320px;
  top: 50px;
  left: 50%;
  margin-left: -300px;
  transform: scale(0.7);

  @media (max-width: 800px) {
    transform: scale(0.5);
    grid-column: 2;
    grid-row: 4;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;

    background: #9053a5;
    opacity: 0.9;

    filter: blur(60px);
  }
  .frame {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(107.56deg, #191515 0%, #494848 98.05%);
    border-radius: 5px;
  }

  .screen {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    height: 300px;
    background: url("./premiere.gif");
    background-size: cover;
    border-radius: 3px;
  }

  .stand {
    position: absolute;
    width: 20px;
    height: 100px;
    top: 100%;
    background: linear-gradient(175.85deg, #262121 3.38%, #3e3c3c 71.95%);
    left: 50%;
    margin-left: -10px;
  }

  .base {
    transform: perspective(880px) rotateX(40deg);
    position: absolute;
    left: 220px;
    right: 220px;
    top: 120%;
    height: 80px;
    background: linear-gradient(148.63deg, #040404 18.94%, #4d4c4c 51.43%);
    border-radius: 8px 14px;
    box-shadow: inset 0 -2px 3px rgba(145, 161, 181, 0.5),
      inset 1px 6px 4px rgba(253, 255, 255, 0.3);
  }
`;
