import React from "react";

import Email from "../assets/Icons/mail-fill.svg";
import Phone from "../assets/Icons/phone-fill.svg";
import DropDown from "../assets/Icons/dropdown.svg";
import Link from "../assets/Icons/link.svg";

function ContactMeComponent() {
  return (
    <>
      <div className="contact-me-component-content-area">
        <div className="contact-me-component-left-details-content-area">
          <div className="contact-me-top-navigation-bar">
            <div className="contact-me-navigation-bar-one">
              <img src={DropDown} alt="dropdown" />
              <p>contacts</p>
            </div>
            <div className="contact-me-component-contact-details">
              <div className="contact-me-details-sm">
                <div className="contact-me-email">
                  <img src={Email} alt="email-icon" />
                  <p>jprasanth2006@gmail.com</p>
                </div>
                <div className="contact-me-phone">
                  <img src={Phone} alt="phone-icon" />
                  <p>8667052857</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-me-next-second-navigaation-bar">
            <div className="contact-me-component-navigation-bar-two">
              <img src={DropDown} alt="dropdown" />
              <p>find-me-also-in</p>
            </div>
            <div className="contaact-me-component-find-me-details">
              <div className="contact-me-navbar-mm">
                <div className="contact-me-component-instagram">
                  <img src={Link} alt="link-icon" />
                  <p>Instagram account</p>
                </div>
                <div className="contact-me-component-github">
                  <img src={Link} alt="link-icon" />
                  <p>Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-me-component-right-contact-fillers-area">
          <div className="contact-me-component-right-contact-navigation-bar">
            <div className="navigation-menu-from-contact-me-component">
              <p>contacts</p>
              <p>x</p>
            </div>
            <div className="contact-me-component-form-fillers">
              <div className="contacts-form-content-area">
                <form action="">
                  <div className="contact-me-name-area">
                    <label htmlFor="Name">_name:</label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="contact-me-email-area">
                    <label htmlFor="Email">_email:</label>
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="contact-me-email-area">
                    <label htmlFor="Message">_message:</label>
                    <input
                      type="text"
                      name="Message"
                      id="Message"
                      placeholder="Your Eessage"
                    />
                  </div>
                  <div className="contact-me-submit-button-area">
                    <button>submit-message</button>
                  </div>
                </form>
              </div>
              <div className="iserted-text-into-ontime-code-area">
                <div className="line-numbers">
                  {/* Render line numbers here */}
                  {[...Array(10)].map((_, index) => (
                    <div key={index} className="line-number">
                      {index + 1}
                    </div>
                  ))}
                </div>
                <pre>
                  <span className="keyword">const</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMeComponent;
