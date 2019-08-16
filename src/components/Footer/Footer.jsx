import React from "react";

function Footer() {
  return (
    <footer className="site-foot">
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left">© 2019 — Published by K-Sato</div>
        <div className="site-foot-nav-right">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
