import React from "react";

function Footer() {
  return (
    <footer className="site-foot">
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left">
          <a href="/">Ghost &amp; Gatsby</a>
          {' '}
© 2019 — Published with
          {" "}
          <a
            className="site-foot-nav-item"
            href="https://ghost.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ghost
          </a>
        </div>
        <div className="site-foot-nav-right">
          <a className="site-foot-nav-item" href="/">
            Home
          </a>
          <a className="site-foot-nav-item" href="/tag/getting-started/">
            Tag
          </a>
          <a
            aria-current="page"
            className="site-foot-nav-item"
            href="/author/ghost/"
          >
            Author
          </a>
          <a
            className="site-foot-nav-item"
            href="https://help.ghost.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
