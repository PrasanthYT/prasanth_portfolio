import React, { useState } from "react";

import Code from "../assets/Icons/terminal-box-fill.svg";
import Account from "../assets/Icons/account-pin-circle-fill.svg";
import DropDown from "../assets/Icons/dropdown.svg";
import CodeDropDown from "../assets/Icons/code-dropdown.svg";
import CodeDropDownOpen from "../assets/Icons/code-dropdown-open.svg";
import FolderOne from "../assets/Icons/folder-one.svg";
import FolderTwo from "../assets/Icons/folder-two.svg";
import FolderThree from "../assets/Icons/folder-three.svg";
import MarkdownFile from "../assets/Icons/markdown-file.svg";
import Email from "../assets/Icons/mail-fill.svg";
import Phone from "../assets/Icons/phone-fill.svg";

function AboutMeComponent() {
  const fileContents = {
    "personal-info": `/*
Hello Guys
I'm Prasanth
...
Line n content`,
    interests: `// Interests content goes here`,
    highschool: `// High school content goes here`,
    university: `// University content goes here`,
  };
  const [activeDropdown, setActiveDropdown] = useState("bio");
  const [selectedFileName, setSelectedFileName] = useState("personal-info.md");
  const [selectedFileContent, setSelectedFileContent] = useState(
    fileContents["personal-info"]
  );
  const [viewerOpen, setViewerOpen] = useState(true);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const handleFileClick = (fileName, fileContent) => {
    setSelectedFileName(fileName);
    setSelectedFileContent(fileContent);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
  };

  return (
    <>
      <div className="about-me-component-main-content-area">
        <div className="about-me-component-explore-area">
          <img src={Code} alt="code-icon" />
          <img src={Account} alt="personal-info-icon" />
        </div>
        <div className="about-me-component-files-and-folders-area">
          <div className="code-editor-personal-info-folder-name">
            <img src={DropDown} alt="drop-down-icon" />
            <p>personal-info</p>
          </div>
          <div className="code-editor-files-area">
            <div className="konjam-thalli-poo"></div>
            <div className="code-editor-folders-and-files-area-with-name">
              <div
                className="code-editor-bio-folder"
                onClick={() => toggleDropdown("bio")}
              >
                <img
                  src={
                    activeDropdown === "bio" ? CodeDropDownOpen : CodeDropDown
                  }
                  alt="drop-down-icon"
                />
                <div className={`bio-folder${activeDropdown === "bio" ? "" : " active"}`}>
                  <img src={FolderOne} alt="folder-icon" />
                  <p>bio</p>
                </div>
              </div>
              {activeDropdown === "bio" && (
                <div className="code-editor-bio-content">
                  <div className="bio-folder-open">
                    <div
                      className="personal-info-file-with-icon"
                      onClick={() =>
                        handleFileClick(
                          "personal-info.md",
                          fileContents["personal-info"]
                        )
                      }
                    >
                      <img src={MarkdownFile} alt="markdown-file-icon" />
                      <p>personal-info</p>
                    </div>
                  </div>
                </div>
              )}
              <div
                className="code-editor-interests-folder"
                onClick={() => toggleDropdown("interests")}
              >
                <img
                  src={
                    activeDropdown === "interests"
                      ? CodeDropDownOpen
                      : CodeDropDown
                  }
                  alt="drop-down-icon"
                />
                <div className={`interests-folder${activeDropdown === "interests" ? "" : " active"}`}>
                  <img src={FolderTwo} alt="folder-icon" />
                  <p>interests</p>
                </div>
              </div>
              {activeDropdown === "interests" && (
                <div className="code-editor-interests-content">
                  <div className="interests-folder-open">
                    <div
                      className="interests-file-with-icon"
                      onClick={() =>
                        handleFileClick(
                          "interests.md",
                          fileContents["interests"]
                        )
                      }
                    >
                      <img src={MarkdownFile} alt="markdown-file-icon" />
                      <p>interests</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="code-editor-education-folder">
                <div
                  className="code-editor-with-icons-and-name"
                  onClick={() => toggleDropdown("education")}
                >
                  <img
                    src={
                      activeDropdown === "education"
                        ? CodeDropDownOpen
                        : CodeDropDown
                    }
                    alt="drop-down-icon"
                  />
                  <div className={`education-folder${activeDropdown === "education" ? "" : " active"}`}>
                    <img src={FolderThree} alt="folder-icon" />
                    <p>education</p>
                  </div>
                </div>
                {activeDropdown === "education" && (
                  <div className="code-editor-education-content">
                    <div className="education-folder-open">
                      <div
                        className="high-school-file-with-icon"
                        onClick={() =>
                          handleFileClick(
                            "high-school.md",
                            fileContents["highschool"]
                          )
                        }
                      >
                        <img src={MarkdownFile} alt="markdown-file-icon" />
                        <p>high-school</p>
                      </div>
                      <div
                        className="university-file-with-icon"
                        onClick={() =>
                          handleFileClick(
                            "university.md",
                            fileContents["university"]
                          )
                        }
                      >
                        <img src={MarkdownFile} alt="markdown-file-icon" />
                        <p>university</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="about-me-component-contacts-area">
            <img src={DropDown} alt="drop-down-icon" />
            <p>Contacts</p>
          </div>
          <div className="contacts-email-and-phone-number">
            <div className="about-me-component-email">
              <img src={Email} alt="email-icon" />
              <p>jprasanth2006@gmail.com</p>
            </div>
            <div className="about-me-component-phone">
              <img src={Phone} alt="phone-icon" />
              <p>8667052857</p>
            </div>
          </div>
          <div className="dummy-area"></div>
        </div>
        {viewerOpen && (
          <div className="code-editor-file-viewer">
            <div className="code-editor-file-edit-top-area">
              <div className="code-editor-file-name">
                <p>{selectedFileName}</p>
                <p onClick={handleCloseViewer}>x</p>
              </div>
            </div>
            <div className="code-editor-file-read-and-view-area-with-progress-bar">
              <div className="file-content-view-area">
                <div className="line-numbers">
                  {/* Render line numbers here */}
                  {[...Array(25)].map((_, index) => (
                    <div key={index} className="line-number">
                      {index + 1}
                    </div>
                  ))}
                </div>
                <pre className="codeeditor-file-content">
                  {selectedFileContent}
                </pre>
              </div>
              
            </div>
          </div>
        )}
        {!viewerOpen && <div className="code-editor-empty-div"></div>}
        <div className="code-editor-right-side-code-snippets">
          <div className="code-editor-right-side-navbar"></div>
          <div className="code-editor-right-side-content-area-with-progress-bar">
            <div className="code-editor-content-area-snippts">
              <div className="code-editor-news-area">
                <h1>{"//"} Coming Soon</h1>
                <p>{"//"} Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMeComponent;
