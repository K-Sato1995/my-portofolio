import React from "react";
import { Link } from "gatsby";

function Nav() {
  return (
    <header className="site-head">
      <div className="container">
        <div className="site-mast">
          <div className="site-mast-left">
            <a href="/">
              <img
                className="site-logo"
                src="/logo.png"
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
            <a className="author-header-item" href="/about">
              About
            </a>
          </div>
        </div>
        <nav className="site-nav">
          <div className="site-nav-left">
            <Link to="/categories/ruby">
              <span className="site-nav-left-button">Ruby</span>
            </Link>
            <Link to="/categories/rails">
              <span className="site-nav-left-button">Rails</span>
            </Link>
            <Link to="/categories/go">
              <span className="site-nav-left-button">Go</span>
            </Link>
            <Link to="/categories/javascript">
              <span className="site-nav-left-button">JavaScript</span>
            </Link>
            <Link to="/categories/react">
              <span className="site-nav-left-button">React</span>
            </Link>
            <Link to="/categories/life">
              <span className="site-nav-left-button">Life</span>
            </Link>
            <Link to="/categories/others">
              <span className="site-nav-left-button">Others</span>
            </Link>
          </div>
          <div className="site-nav-right" />
        </nav>
      </div>
    </header>
  );
}

export default Nav;
