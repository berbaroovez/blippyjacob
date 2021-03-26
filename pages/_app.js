import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useState } from "react";
import styled from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../components/Themes";
import { useDarkMode } from "../components/UseDarkMode";
import Toggle from "../components/Toggle";
export default function App({ Component, pageProps }) {
  // const [theme, setTheme] = useState("light");
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Toggle toggleTheme={themeToggler} theme={theme} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
