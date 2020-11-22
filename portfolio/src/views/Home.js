import React from "react";
import './Home.css'
import headshot from './images/pic3.jpeg'

function Home(props) {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="row">
        <div className="col-4">
          <img
            className="responsive"
            src={headshot}
            alt="Headshot of Marissa"
            style={{ width: "250px" }}
          />
        </div>

        <div className="col-8">
          <p>
            Hello World! I am a recent Queen’s University graduate with a BSc in
            Environmental Sciences and am currently enrolled in University of
            Toronto’s SCS Coding Bootcamp. I am bilingual (French and English)
            and possess the leadership, background knowledge and drive to excel
            in a learning-based role in the field of environmental tech.
          </p>
          <p>
            I am currently seeking an opportunity where I can learn and delve
            deeper into programming languages such as JavaScript, mySQL and
            Python.{" "}
          </p>
          <ul>
            <li>
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/marissa-wilson-44578217a/"
                target="_blank"
              >
                Click here
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/marissarrwilson" target="_blank">
                Click here
              </a>
            </li>
            <li>
              Resume - PDF:{" "}
              <a
                href="https://drive.google.com/file/d/1xl1DpLfJVbwaZHClk0a7S0TxYUVhfLEZ/view?usp=sharing"
                target="_blank"
              >
                Click here
              </a>
            </li>
          </ul>
          Email: wilson.marissarose@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Home;
