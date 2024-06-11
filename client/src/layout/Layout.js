import React from "react";

// import "../styles/background.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "87vh", position: "relative" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
