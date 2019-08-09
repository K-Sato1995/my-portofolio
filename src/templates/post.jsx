import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Nav from "../components/Nav";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "../styles/app.css";
import "prismjs/themes/prism-coy.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Nav />
          <main className="site-main">
            <div className="container">
              <article className="content">
                <figure className="post-feature-image">
                  <img
                    src="https://static.ghost.org/v2.0.0/images/welcome-to-ghost.jpg"
                    alt="Welcome to Ghost"
                  />
                </figure>
                <section className="post-full-content">
                  <h1 className="content-title">{post.title}</h1>
                  <PostTags tags={post.tags} />
                  <section className="content-body load-external-scripts">
                    <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                  </section>
                </section>
              </article>
              <div className="post-meta">
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
              <UserInfo config={config} />
              <Disqus postNode={postNode} />
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
