import React from "react";
import './Portfolio.css';
import Homepage from './images/homepage.png'
import passresult from './images/PasswordResult.png'
import postpage from './images/post.png'
import prompt1 from './images/Prompt-1.png'
import searchpage from './images/search.png'
import ss1 from './images/Screenshot1.png'
import wfd1 from './images/wfd1.jpg'
import wfd2 from './images/wfd2.jpg'
import wfd3 from './images/wfd3.jpg'

function Portfolio(props) {
  return (
    <div>
        <div className="title"><h1>Portfolio</h1></div>
        <div id="project1" className="container">
            <h2>Project 1 - What's For Dinner?</h2>
            <p>
                <b>Purpose:</b> To combine restaurant finding and recipe finding into
                one web application
            </p>

            <p>
                {" "}
                <b>Usage:</b>
                <ul>
                <li>
                    Makes calls to server APIs: Yelp Fusion API and EDAMAM's Recipe
                    Search API
                </li>
                <li>Checks for user inputs and set as API parameters</li>
                <li>Shows results based on user inputs</li>
                </ul>
            </p>

            <p>
                This project consists of the following files:
                <ul>
                <li>
                    <b>index.html:</b> Restaurant finder page and the landing page
                    when it is first loaded
                </li>
                <li>
                    <b>recipeFinder.html:</b> Recipe finder page
                </li>
                <li>
                    <b>script.js:</b> Manage API calls to Yelp Fusion API and show
                    results for index.html/Restaurant finder page
                </li>
                <li>
                    <b>script2.js:</b> Manage API calls to EDAMAM's Recipe Search API
                    and show results for recipeFinder.html
                </li>
                <li>
                    <b>style.css:</b> General styling of index.html and
                    recipeFinder.html
                </li>
                </ul>
                Made using HTML5, CSS, Javascript, jQuery, Bootstrap, Yelp Fusion API
                and EDAMAM's Recipe Search API
            </p>

            <p>
                Link to GitHub repository:{" "}
                <a href="https://github.com/marissarrwilson/Proj1">
                https://github.com/marissarrwilson/Proj1
                </a>
            </p>
            <p>
                Link to deployed application:{" "}
                <a href="https://marissarrwilson.github.io/Proj1/" target="_blank">
                https://marissarrwilson.github.io/Proj1/
                </a>
            </p>

            <h3>Homepage - Restaurant Finder</h3>
            <img
            className="responsive"
            src={wfd1}
            width="700px"
            alt="wfd1"
            />
            <div><br></br></div>
            <h3>Results Page</h3>
            <img
            className="responsive"
            src={wfd2}
            width="700px"
            alt="wfd2"
            />

            <h3>Recipe Finder Page</h3>
            <img
            className="responsive"
            src={wfd3}
            width="700px"
            alt="wfd3"
            />
      </div>
      
        <div><hr></hr></div>

      <div class="container" id="password">
            <h2>Password Generator</h2>
            <p>
            <b>Usage:</b> This password generator will provide the user with a
            password suggestion based on the criteria chosen by the user via a
            series of prompts.
            </p>
            <p>
            Link to GitHub repository:{" "}
            <a
                href="https://github.com/marissarrwilson/PasswordGenerator"
                target="_blank"
            >
                https://github.com/marissarrwilson/PasswordGenerator
            </a>
            </p>
            <p>
            Link to deployed application:{" "}
            <a
                href="https://marissarrwilson.github.io/PasswordGenerator/"
                target="_blank"
            >
                https://marissarrwilson.github.io/PasswordGenerator/
            </a>
            </p>

            <p>
            <b>Method</b>
            </p>
            <p>
            I made this password generator using HTML, CSS and JavaScript files. I
            did not make changes to the HTML and CSS files, and added code to the
            JavaScript file.
            <ul>
                <li>
                I started by making arrays of the variables that would be used to
                generate the password: upper case letters, lower case letters,
                numbers and special characters.
                </li>
                <li>
                I then made an array of confirmation prompts for the above
                mentioned arrays/variables.
                </li>
                <li>
                Afterwards, I created a loop if the user entered a value outside
                of the paramaters with if/else functions.
                </li>
            </ul>
            </p>

            <h3>First Prompt</h3>
            <img className="responsive" src={prompt1}  width="700px"
            alt="first prompt" />
             <div><br></br></div>
            <h3>Result</h3>
            <img
            className="responsive"
            src={passresult}
            width="700px"
            alt="password-result"
            />
     </div>

     <div><hr></hr></div>

      <div id="Weather-Dashboard" className="container">
            <h2>Weather Dashboard</h2>
            <p>
            <b>Description</b>
            </p>
            <p>
            <ul>
                <li>
                This application is a weather dashboard that allows the user to
                search for a city and view its current weather along with the
                forecast predictions for the next 5 days
                </li>
                <li>
                This app was made using HTML, CSS, JavaScript & an API to retrieve
                specific information on the weather (open weather map).
                </li>
            </ul>
            </p>

            <p>
            <b>Usage</b>
            </p>
            <p>
            Type in a city's name to view its current weather. The application can
            be accessed via the following link:{" "}
            <a href="https://marissarrwilson.github.io/Weather-Dashboard/">
                https://marissarrwilson.github.io/Weather-Dashboard/
            </a>
            .
            <p>
                Link to GitHub repository:{" "}
                <a
                href="https://github.com/marissarrwilson/Weather-Dashboard"
                target="_blank"
                >
                https://github.com/marissarrwilson/Weather-Dashboard
                </a>
            </p>
            </p>

            <h3>Screenshot</h3>
            <img
            className="responsive"
            src={ss1}
            width="700px"
            alt="screenshot1"
            />
      </div>

        <div><hr></hr></div>

      <div id="proj-2" className="container">
            <h2>Project 2 - Recipe Share</h2>
            <p>
            <b>Description</b>
            </p>
            <p>
            Recipe Share is an application where users can search for, and share
            their own recipes on a single platform. When users create an account,
            they will have the option to “save” recipes for later and add their
            own concoctions to the food blog.
            </p>

            <p>
            <b>Usage & Installation</b>
            </p>
            <p>
            Create the database by using mySQL Workbench, copy schema.sql and
            seed.sql and run each document in it. Setup the .env to run this. You
            may also need to do an npm install. Run locally via terminal/Gitbash
            by typing "node server.js" to start up the application. Open browser
            to "http://localhost:3000" to use!
            <p>
                Link to GitHub repository:{" "}
                <a
                href="https://github.com/marissarrwilson/Project-2"
                target="_blank"
                >
                https://github.com/marissarrwilson/Project-2
                </a>
            </p>
            <p>
                Link to Heroku deployed application:{" "}
                <a
                href="https://recipe-share-team-one.herokuapp.com/"
                target="_blank"
                >
                https://recipe-share-team-one.herokuapp.com/
                </a>
            </p>
            <p>
                Link to presentation slides:{" "}
                <a
                href="https://docs.google.com/presentation/d/1mzwqSG5l1ccwJvd59UCrqDW_1Mcoga7kNdNsRl2DfMc/edit#slide=id.ga6d2717754_2_99"
                target="_blank"
                >
                https://docs.google.com/presentation/d/1mzwqSG5l1ccwJvd59UCrqDW_1Mcoga7kNdNsRl2DfMc/edit#slide=id.ga6d2717754_2_99
                </a>
            </p>
            </p>

            <h3>Screenshots</h3>
            <h4>Homepage</h4>
            <img
            className="responsive"
            src={Homepage}
            width="700px"
            alt="homepage"
            />
             <div><br></br></div>
            <h4>Search Results</h4>
            <img
            className="responsive"
            src={searchpage}
            width="700px"
            alt="search page"
            />
             <div><br></br></div>
            <h4>Post Page</h4>
            <img
            className="responsive"
            src={postpage}
            width="700px"
            alt="post page"
            />
      </div>
 </div> 
  )
}

export default Portfolio;
