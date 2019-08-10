import React from "react";

function Nav() {
  return (
    <header className="site-head">
      <div className="container">
        <div className="site-mast">
          <div className="site-mast-left">
            <a href="/">
              <img
                className="site-logo"
                src="https://static.ghost.org/v1.0.0/images/ghost-logo.svg"
                alt="Ghost &amp; Gatsby"
              />
            </a>
          </div>
          <div className="site-mast-right">
            <a
              href="https://twitter.com/tryghost"
              className="site-nav-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="site-nav-icon"
                src="/images/icons/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.facebook.com/ghost"
              className="site-nav-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="site-nav-icon"
                src="/images/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              className="site-nav-item"
              href="https://feedly.com/i/subscription/feed/https://gatsby.ghost.org/rss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="site-nav-icon"
                src="/images/icons/rss.svg"
                alt="RSS Feed"
              />
            </a>
          </div>
        </div>
        <nav className="site-nav">
          <div className="site-nav-left">
            <a className="site-nav-item" href="/">
              Home
            </a>
            <a className="site-nav-item" href="/tag/getting-started/">
              Tag
            </a>
            <a
              aria-current="page"
              className="site-nav-item"
              href="/author/ghost/"
            >
              Author
            </a>
          </div>
          <div className="site-nav-right">
            <a className="site-nav-button" href="/about">
              About
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
