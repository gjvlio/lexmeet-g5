// src/pages/Home/index.jsx
import { Fragment } from "react/jsx-runtime";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Practice from "./sections/Practice";
import GotLegal from "./sections/GotLegal";
import LawUpdates from "./sections/LawUpdates";
import EverydayLaw from "./sections/EverydayLaw";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Practice />
      <GotLegal />
      <LawUpdates />
      <EverydayLaw />
    </>
  );
}