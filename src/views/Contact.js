import React from "react";

function Contact (props) {
  return (
    <div>
      <h1><center>Contact</center></h1>
      <form id="fullform">

      <ul>
            <li>
              <i class="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/marissa-wilson-44578217a/"
                target="_blank"
              > Linkedin</a>
            </li>
            <li>
            <i class="fab fa-github"></i> 
               <a href="https://github.com/marissarrwilson" target="_blank"> Github</a>
            </li>
            <li>
            <i class="far fa-file"></i> 
              <a
                href="https://docs.google.com/document/d/1HdLLGfZGL63RfK2XURthGTctJve-56r5zIhcOFslMWc/edit"
                target="_blank"
              > Resume
              </a>
            </li>
          <li>
          <i class="far fa-envelope"></i> 
          <a href="mailto:wilson.marissarose@gmail.com" target="_blank"> Email</a>
          </li>
          </ul>
       
       

        
      </form>
    </div>
  );
}

export default Contact;