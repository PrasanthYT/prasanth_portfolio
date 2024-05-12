import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import Email from "../assets/Icons/mail-fill.svg";
import Phone from "../assets/Icons/phone-fill.svg";
import DropDown from "../assets/Icons/dropdown.svg";
import Link from "../assets/Icons/link.svg";

function ContactMeComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: getCurrentDate(),
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: "short", day: "2-digit", month: "short" };
    return currentDate.toLocaleDateString("en-US", options);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if form is valid before submitting
    if (!validateForm()) {
      return;
    }
    try {
      // Send form data to the backend API
      await axios.post("http://localhost:3000/api/messages", formData);
      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const validateEmail = (email) => {
    // Simple email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    if (formData.name.length < 3) {
      toast.error("Name must be at least 3 characters long");
      return false;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (formData.message.length === 0) {
      toast.error("Message cannot be empty");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      date: getCurrentDate(),
    });
    setSubmitted(false);
  };

  const GithubLink = () => {
    window.open("https://github.com/PrasanthYT", "_blank")
  }

  const LinkedInLink = () => {
    window.open("https://www.linkedin.com/in/rjprasanth/", "_blank")
  }

  const InstagramLink = () => {
    window.open("https://www.instagram.com/rj_prasanthu/", "_blank")
  }

  return (
    <>
      <ToastContainer />
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
                <div className="contact-me-component-instagram" onClick={InstagramLink}>
                  <img src={Link} alt="link-icon" />
                  <p>Instagram account</p>
                </div>
                <div className="contact-me-component-github" onClick={GithubLink}>
                  <img src={Link} alt="link-icon" />
                  <p>Github</p>
                </div>
                <div className="contact-me-component-github" onClick={LinkedInLink}>
                  <img src={Link} alt="link-icon" />
                  <p>Linked In</p>
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
          </div>
          <div className="contact-me-component-form-fillers">
            <div className="contacts-form-content-area">
              {submitted ? (
                <div className="thanks-message-area">
                  <h3>Thank you! 🤘</h3>
                  <p>
                    Your message has been accepted. You will recieve answer
                    really soon!
                  </p>
                  <button onClick={resetForm}>send-new-message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-me-name-area">
                    <label htmlFor="name">_name:</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-me-email-area">
                    <label htmlFor="email">_email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-me-message-area">
                    <label htmlFor="message">_message:</label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Your Eessage"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-me-submit-button-area">
                    <button>submit-message</button>
                  </div>
                </form>
              )}
            </div>
            <div className="iserted-text-into-ontime-code-area">
              <div className="code-preview">
                <div className="line-numbers">
                  {/* Render line numbers here */}
                  {[...Array(10)].map((_, index) => (
                    <div key={index} className="line-number">
                      {index + 1}
                    </div>
                  ))}
                </div>
                <pre className="code-block">
                  <code>
                    <span className="keyword">const</span>{" "}
                    <span className="variable">button</span> =
                    <span className="variable"> document.querySelector</span>
                    {"("}
                    <span className="value">'#sendBtn'</span>
                    {")"}; <br />
                    <span className="keyword">const</span>{" "}
                    <span className="variable">message</span> = {"{"} <br />
                    <span className="variable">name:</span> "
                    <span className="value">{formData.name}</span>", <br />
                    <span className="variable">email:</span> "
                    <span className="value">{formData.email}</span>", <br />
                    <span className="variable">message:</span> "
                    <span className="value">
                      {formData.message.length > 40
                        ? "Message is too long to display"
                        : formData.message}
                    </span>
                    ", <br />
                    <span>date:</span> "
                    <span className="value">{formData.date}</span>" <br />
                    {"}"} <br />
                    <span className="variable">button.addEventListener</span>
                    {"("} <span className="value">'click'</span> {","} {"()"}{" "}
                    <span className="symbol">={">"}</span> {"{"} <br />
                    <span className="variable">form.send(message)</span>;<br />
                    {"}"}{")"}
                  </code>
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
