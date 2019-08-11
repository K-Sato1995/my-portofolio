import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];

    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        category: postEdge.node.frontmatter.category,
        description: postEdge.node.frontmatter.description,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    const { nextPage, prevPage } = this.props;
    return (
      <div>
        <main className="site-main">
          <div className="container">
            <header className="author-header">
              <div className="author-header-content">
                <h1>Articles</h1>
                <p>
                  The articles are mainly about programming and my daily life.
                </p>
                <div className="author-header-meta">
                  <a
                    className="author-header-item"
                    href="https://ghost.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  <a
                    className="author-header-item"
                    href="https://twitter.com/tryghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    className="author-header-item"
                    href="https://www.facebook.com/ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className="author-header-image">
                <img src="me.jpg" alt="K-Sato" />
              </div>
            </header>
            <section className="post-feed">
              {/* Your post list here. */
              postList.map(post => (
                <Link className="post-card" to={post.path} key={post.title}>
                  <header className="post-card-header">
                    <div
                      className="post-card-image"
                      style={{
                        backgroundImage: `url(${post.cover})`
                      }}
                    />
                    <div className="post-card-tags">
                      <span className="">{post.category}</span>
                    </div>
                    <h2 className="post-card-title">{post.title}</h2>
                  </header>
                  <section className="post-card-excerpt">
                    {post.description}
                  </section>
                  <footer className="post-card-footer">
                    <div className="post-card-footer-left">
                      <div className="post-card-avatar">
                        <img
                          className="author-profile-image"
                          src="photo.png"
                          alt="K-Sato"
                        />
                      </div>
                      <span>K-Sato</span>
                    </div>
                    <div className="post-card-footer-right">
                      <div>1 min read</div>
                    </div>
                  </footer>
                </Link>
              ))}
            </section>
            <nav className="pagination" role="navigation">
              <Link to={prevPage} className="newer-posts">
                Newer Posts
              </Link>

              {!this.props.isLast && (
                <Link to={nextPage} className="older-posts">
                  Older Posts
                </Link>
              )}
            </nav>
          </div>
        </main>
      </div>
    );
  }
}

export default PostListing;
