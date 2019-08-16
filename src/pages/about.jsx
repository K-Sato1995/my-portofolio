import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <Nav />
          <About />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
