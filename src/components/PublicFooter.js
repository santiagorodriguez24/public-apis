import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const locales = {
  copyright: '© Copyright Public APIs. All rights reserved.',
};

const PublicFooter = () => {
  return (
    <div className="public-footer">
      <Col lg={3} className="footer-col links"></Col>
      <Col lg={6} className="footer-col">
        <span className="legal-text">{locales.copyright}</span>
      </Col>
      <Col lg={3} className="footer-col">
        <Row className="footer-icons-row">
          <div className="footer-icon-container">
            <Link
              to={{
                pathname: 'https://github.com/public-apis/public-apis',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-icon" />
            </Link>
          </div>
          <div className="footer-icon-container">
            <Link
              to={{
                pathname: 'https://www.linkedin.com/in/krishnaa8421/',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-icon" />
            </Link>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default PublicFooter;
