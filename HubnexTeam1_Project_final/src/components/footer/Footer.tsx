/* Written by  Rushikesh Bante */

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <img src='\public\Hubnex Labs left align (1).png' alt='' />
          <h2>About Hubnex Labs</h2>
          <p>
            We are a leading IT consultancy with expertise in innovative
            solutions for modern challenges. Our client-centric approach enables
            us to design tailored solutions that keep businesses ahead in the
            ever-evolving digital landscape.
          </p>
          <div className='social-icons'>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaGithub />
            </i>
          </div>
        </div>
        <div className='Alllinks'>
          <div className='footer-section links'>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Careers</li>
              <li>For Partners</li>
            </ul>
          </div>
          <div className='footer-section links'>
            <h3>Help</h3>
            <ul>
              <li>Grievance Redressal Policy</li>
              <li>Community</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer-section links'>
            <h3>Resources</h3>
            <ul>
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Carrers</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
