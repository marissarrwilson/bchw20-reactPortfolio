import React from "react";

function Contact (props) {
  return (
    <div>
      <h1><center>Contact</center></h1>
      <form id="fullform">

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationDefault01">Name</label>
            <input type="text" className="form-control" id="validationDefault01" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationDefault03">Email</label>
            <input type="text" className="form-control" id="validationDefault03" required/>
          </div>
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>

        <button className="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default Contact;