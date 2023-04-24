import React from "react";
import NavBar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
