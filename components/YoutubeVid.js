import styled from "styled-components";

export default function YoutubeVid() {
  return (
    <YoutubeVidContainer>
      <p>The Dark Knight Rises: What Went Wrong? – Wisecrack Edition</p>
      <iframe
        width="300"
        height="315"
        src="https://www.youtube.com/embed/Y8Wp3dafaMQ"
        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/Y8Wp3dafaMQ?autoplay=1><img src=https://img.youtube.com/vi/Y8Wp3dafaMQ/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="The Dark Knight Rises: What Went Wrong? – Wisecrack Edition"
      />
    </YoutubeVidContainer>
  );
}

const YoutubeVidContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  p {
    width: 300px;
    padding: 0;
    margin: 0;
    font-family: azo-sans-web, sans-serif;
    font-weight: 300;
    font-style: normal;
  }
`;
