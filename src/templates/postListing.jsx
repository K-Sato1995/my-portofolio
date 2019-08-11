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

class postListing extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <Nav />
          <SEO />
          <PostListing
            postEdges={postEdges}
            prevPage={prevPage}
            nextPage={nextPage}
            isLast={isLast}
          />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default postListing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query postListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
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
