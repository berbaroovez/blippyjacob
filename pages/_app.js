import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
