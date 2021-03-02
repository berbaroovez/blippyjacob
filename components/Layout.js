import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  );
}
