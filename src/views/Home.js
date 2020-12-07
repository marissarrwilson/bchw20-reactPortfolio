import React from "react";
import "./Home.css";
import headshot from "./images/pic3.jpeg";

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
            Hello World! I am bilingual (French and English) full-stack web
            developer with experience working with HTML/CSS, JavaScript and
            React. I am Interested in refining my skills in web design and
            deepening my knowledge in back-end web development. I'm Looking to
            utilize my background in environmental science (BSc) to create
            sustainable solutions through programming. I am most effective at
            problem-solving and visualizing a themed UI to develop user-friendly
            web applications. I'm known among coworkers for good communication,
            work ethic, creativity and attention to detail, and possess the
            leadership, background knowledge and drive to excel in a
            learning-based role in the field of environmental tech.
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
                href="https://docs.google.com/document/d/1HdLLGfZGL63RfK2XURthGTctJve-56r5zIhcOFslMWc/edit"
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
