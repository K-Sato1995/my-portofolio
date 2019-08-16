import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <main className="site-main">
        <div className="container">
          <header className="author-header">
            <div className="author-header-content-about">
              <h1>Who am I?</h1>
              <p>Here is a short introduction of myself.</p>
            </div>
          </header>
          <article className="content">
            <p>
              People often find me outgoing, upbeat, self-motivated and silly. I
              grew up in a very small and peaceful town and moved to a huge city
              for college.
            </p>
            <p>
              In college, I majored in political economy and mainly spent my
              time there studying international political economy and public
              economics. I also started coding when I was a senior and have been
              studying programming since then.
            </p>
            <p>
              Though what I learnt in college was academically very interesting,
              I didn't necessarily consider myself suitable for a politician or
              economist. I also was not interested in sales or marketing which a
              lot of my friends in the same department ended up doing after
              college. So I ended up getting a job as a webdeveloper since I
              really liked coding and I was really fascinated with the idea of
              createing something unique and original that didn't exist before.
            </p>
          </article>
        </div>
      </main>
    );
  }
}

export default About;
