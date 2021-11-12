import React from "react";
export default function MyFooter() {
    return (
    <footer classname="d-flex bg-dark">
    <div classname="container" id="footer">
      <div classname="row justify-content-center">
        <div classname="col-8" id="footer-icons">
          <i classname="footer-icons text-secondary mx-2 bi bi-facebook" />
          <i classname="footer-icons text-secondary mx-2 bi bi-instagram" />
          <i classname="footer-icons text-secondary mx-2 bi bi-twitter" />
          <i classname="footer-icons text-secondary mx-2 bi bi-youtube" />
        </div>
        <div classname="row col-8 px-2">
          <div classname="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Info</li>
              <li>Meida Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
            <button classname="footer-btn">Service Code</button>
          </div>
          <div classname="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div classname="col-12 col-sm-6 col-md-4 col-lg-3">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>
      </div>
      <p classname="copyright text-secondary">© 2021 Netflix, inc.</p>
    </div>
  </footer>
  
        );
}