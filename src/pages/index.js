import * as React from "react";
import Helmet from "react-helmet";
import "../components/main.css";
import gitlab from "../images/icons/gitlab.png"
import element from "../images/icons/element.png"
import email from "../images/icons/email.png"

var description = "Hello! I am a Hobbyist Programmer based out of the US, I'm pretty new to programming but I'm getting better; I know Rust, Arduino, Makefile, C++, and Bash Script."

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Bennet Tsoris</title>
        <link rel="stylesheet" href="../fonts/specimen_files/specimen_stylesheet.css" type="text/html" charset="utf-8"/>
        <link rel="stylesheet" href="../fonts/stylesheet.css" type="text/html" charset="utf-8"/>
      </Helmet>
      <body>
        <div className="body-contents">
          <nav>
            <li><a style={{fontWeight: 700}} href="/">Home</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/t4rtp1ck73-in-the-terminal">Projects</a></li>
          </nav><br style={{lineHeight: "50px"}}/>
          <h1>Bennet Tsoris</h1><br/>
          <span id="tagline">Hobbyist Programmer</span>
          <p>{description}</p>
          <br style={{lineHeight: "50px"}}/>
          <div className="bottom-socials">
            <div className="social-buttons">
              <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/t4rtp1ck73-in-the-terminal"><img draggable="false" src={gitlab} alt="gitlab"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="https://app.element.io/#/user/@t4rtp1ck13:matrix.org"><img draggable="false" src={element} alt="element"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="mailto:bennet@tsor.is"><img draggable="false" src={email} alt="email"></img></a>
            </div>
          </div>
        </div>
      </body>
    </main>
  )
}

export default IndexPage
