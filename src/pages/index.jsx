import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "../styles/app.css";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <Nav />
          <SEO />
          <PostListing postEdges={postEdges} prevPage="/" nextPage="/2" />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            category
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
