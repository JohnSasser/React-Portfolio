import React from "react";

function Footer (props) {
  return (
    <div className="pos-f-t fixed-bottom footer">
      <nav className="navbar justify-content-center">
        <div className="nav-item">
          <a
            className="navbar-brand btn btn-social-icon btn-twitter"
            href="https://www.github.com/JohnSasser"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>

          <a
            className="navbar-brand btn btn-social-icon btn-twitter"
            href="https://www.linkedin.com/in/john-sasser-does-javascript/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>

          <a
            className="navbar-brand btn btn-social-icon btn-twitter justify-self-right"
            href="#email-container"
            download="web-developer-resume.docx"
            rel="noopener noreferrer"
          >
            <i className="fas fa-address-card fa-lg"> Contact </i>
          </a>

          <a
            className="navbar-brand btn btn-social-icon btn-twitter"
            href="./web-developer-resume.docx"
            download="web-developer-resume.docx"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-download fa-lg"> Resume </i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
