import React, { useState } from "react";
import "./styles.css";

import Instagram from "../assets/Icons/instagram-fill.svg";
import LinkedIn from "../assets/Icons/linkedin-box-fill.svg";
import Github from "../assets/Icons/github-fill.svg";
import Hamburger from "../assets/Icons/hanburger.svg";
import Close from "../assets/Icons/close.svg";

import AboutMeComponent from "./AboutMeComponent";
import ProjectsComponent from "./ProjectsComponent";
import ContactMeComponent from "./ContactMeComponent";

function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState("hello");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsMobileMenuOpen(false);
  };

  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    {
      quote: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote:
        "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss",
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    {
      quote: "The greatest wealth is to live content with little.",
      author: "Plato",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ];

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const { quote, author } = getRandomQuote();

  const MobileMenu = () => (
    <div className="home-component-mobile-menu">
      <div className="home-component-mobile-menu-with-background">
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-men-items-name-and-close-button">
            <p>prasanth-j</p>
            <div className="space-eveny-area-helper"></div>
            {isMobileMenuOpen && (
              <div
                className="mobile-menu-overlay"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src={Close} alt="" />
              </div>
            )}
          </div>
          <div className="mobile-menu-content">
            <div
              className={`mobile-menu-item ${
                activeMenuItem === "hello" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("hello")}
            >
             <p>_hello</p>
            </div>
            <div
              className={`mobile-menu-item ${
                activeMenuItem === "about" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("about")}
            >
              <p>_about-me</p>
            </div>
            <div
              className={`mobile-menu-item ${
                activeMenuItem === "projects" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("projects")}
            >
              <p>_projects</p>
            </div>
            <div
              className={`mobile-menu-item ${
                activeMenuItem === "contact" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("contact")}
            >
              <p>_contact-me</p>
            </div>
          </div>
          <div className="mobile-menu-footer">
            <div className="mobile-menu-follow-me-on">
              <p>follow me in:</p>
            </div>
            <div className="footer-gap-helper-area"></div>
            <div className="mobile-menu-instagram-area" onClick={InstagramLink}>
              <img src={Instagram} alt="" />
            </div>
            <div className="mobile-menu-linked-in-area" onClick={LinkedInLink}>
              <img src={LinkedIn} alt="" />
            </div>
            <div className="mobile-menu-github-area" onClick={GithubLink}>
              <img src={Github} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RecentGithub = () => {
    window.open("https://github.com/PrasanthYT/podkast-audio-player", "_blank")
  }

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
      {isMobileMenuOpen && <MobileMenu />}
      <div className="home-component-content-area">
        <div className="home-component-main-code-editor">
          <div className="home-component-code-editor-navbar">
            <div className="code-editor-navbar-name-area">
              <p>prasanth-j</p>
            </div>
            <div
              className="home-component-hamburger-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <img src={Hamburger} alt="" />
            </div>
            <div
              className={`code-editor-navbar-hello-area ${
                activeMenuItem === "hello" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("hello")}
            >
              <p>_hello</p>
            </div>
            <div
              className={`code-editor-navbar-about-me-area ${
                activeMenuItem === "about" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("about")}
            >
              <p>_about-me</p>
            </div>
            <div
              className={`code-editor-navbar-projects-area ${
                activeMenuItem === "projects" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("projects")}
            >
              <p>_projects</p>
            </div>
            <div className="code-editor-navbar-announcement-area"></div>
            <div
              className={`code-editor-navbar-cantact-me-area ${
                activeMenuItem === "contact" ? "active" : ""
              }`}
              onClick={() => handleMenuItemClick("contact")}
            >
              <p>_contact-me</p>
            </div>
          </div>
          {activeMenuItem === "about" ? (
            <AboutMeComponent />
          ) : activeMenuItem === "projects" ? (
            <ProjectsComponent />
          ) : activeMenuItem === "contact" ? (
            <ContactMeComponent />
          ) : (
            <div className="home-component-code-editor-my-intro-and-game-area">
              <div className="code-editor-my-intro-area">
                <div className="code-editor-my-intro-one">
                  <p>Hi all, I am</p>
                  <h1>Prasanth</h1>
                  <h3>&gt; Full Stack Developer</h3>
                </div>
                <div className="code-editor-my-intro-two">
                  <p>{"//"} my recent project is {"`podkast-audio-player`"}</p>
                  <p>{"//"} check out the project repository on GitHub:</p>
                  <p>
                    <span className="keyword">const</span>{" "}
                    <span className="variable-name">githubLink</span>{" "}
                    <span className="equal-to">= </span>
                    <span className="values" onClick={RecentGithub}>
                      &quot;https://github.com/PrasanthYT/podkast-audio-player&quot;
                    </span>
                  </p>
                </div>
              </div>
              <div className="code-editor-random-code-version-qoutes">
                <div className="code-editor-for-quotes">
                  <p className="random-quote-heading">Random Quotes:</p>
                  <p className="quote-area">
                    {"//"} {quote}
                  </p>
                  <p className="author-name">- {author}</p>
                </div>
              </div>
            </div>
          )}
          <div className="home-component-code-editor-footer-area">
            <div className="code-editor-footer-follow-text-area">
              <p>follow me in:</p>
            </div>
            <div className="code-editor-footer-instagram-area" onClick={InstagramLink}>
              <img src={Instagram} alt="instagram-icon" />
            </div>
            <div className="code-editor-footer-linked-in-area" onClick={LinkedInLink}>
              <img src={LinkedIn} alt="linked-in-icon" />
            </div>
            <div className="code-editor-download-area"></div>
            <div className="code-editor-github-username-area" onClick={GithubLink}>
              <p>@PrasanthYT</p>
              <img src={Github} alt="github-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
