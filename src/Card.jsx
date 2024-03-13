import React, { useState } from "react";

export default function Card() {
  const [tabIndx, setTabIdx] = useState(1);
  const handleShowTab = (idx) => {
    setTabIdx(idx);
  };
  return (
    <div className="container">
      <div className="title">
        <h1>More About Us</h1>
        <p>click the tab button to learn more</p>
      </div>
      <div className="tabs">
        <div className="tabs-title">
          <button
            className={tabIndx === 1 ? "tab active-tab" : "tab"}
            onClick={() => handleShowTab(1)}
          >
            Who We Are
          </button>
          <button
            className={tabIndx === 2 ? "tab active-tab" : "tab"}
            onClick={() => handleShowTab(2)}
          >
            What We Do
          </button>
          <button
            className={tabIndx === 3 ? "tab active-tab" : "tab"}
            onClick={() => handleShowTab(3)}
          >
            Get In Touch
          </button>
        </div>
        <div className="tabs-content">
          <article
            className={tabIndx === 1 ? "content active-content" : "content"}
          >
            <h4>Who We Are</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iusto numquam explicabo aperiam inventore vel repudiandae
              assumenda est accusantium, molestiae, itaque similique
              consequuntur cumque voluptate omnis. Laudantium eius error ullam!
            </p>
          </article>
          <article
            className={tabIndx === 2 ? "content active-content" : "content"}
          >
            <h4>What We Do</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iusto numquam explicabo aperiam inventore vel repudiandae
              assumenda est accusantium, molestiae, itaque similique
              consequuntur cumque voluptate omnis. Laudantium eius error ullam!
            </p>
          </article>
          <article
            className={tabIndx === 3 ? "content active-content" : "content"}
          >
            <h4>Get In Touch</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iusto numquam explicabo aperiam inventore vel repudiandae
              assumenda est accusantium, molestiae, itaque similique
              consequuntur cumque voluptate omnis. Laudantium eius error ullam!
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
