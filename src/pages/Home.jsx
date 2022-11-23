import React, { Fragment } from "react";
import Analytics from "../components/Analytics";
import Features from "../components/Features";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Manage from "../components/Manage";
import Footer from "../components/Footer";
import "./Home.css";
import GetStarted from "../components/GetStarted";

function Home() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <Analytics />
        </section>
        <section>
          <Manage />
        </section>
        <section>
          <GetStarted />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default Home;
