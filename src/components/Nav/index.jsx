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
                src="logo.png"
                alt="Ghost &amp; Gatsby"
              />
            </a>
          </div>
          <div className="site-mast-right">
            <a
              className="author-header-item"
              href="https://dev.to/k_penguin_sato"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev.to
            </a>
            <a
              className="author-header-item"
              href="https://qiita.com/k-penguin-sato"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qiita
            </a>
            <a
              className="author-header-item"
              href="https://github.com/K-Sato1995"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a className="site-nav-button" href="/about">
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
