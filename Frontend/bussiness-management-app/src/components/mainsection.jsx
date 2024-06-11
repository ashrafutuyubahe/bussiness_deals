import React, { useState } from "react";
import ReportProblemForm from "../pages/card";
import img2 from "./poeplecheering.jpg";
import img3 from "./pople disc.jpg"
import homeimg from "./john-doe-2rhz3Nuq12c-unsplash.jpg"
import extra from "./extra-large.jpg";



export default function Mainpage() {
  const [showForm, setShowForm] = useState(false);

  function handleOnToggleForm() {
    setShowForm(!showForm);
  }
  const handleCloseProblemReportForm = () => {
    setShowForm(false);
  };
  
  return (
    <main>
      {showForm && <ReportProblemForm onClose={handleCloseProblemReportForm} />}
      <div class="first-section">
        <div class="one-part">
          <div class="header-contents">
            <p>
              Everything starts with <br />
              Identity
            </p>
          </div>
          <div class="second-header-contents">
            Identity can create a great user experiences ,increase customer
            sign-ups,improve employee productivity
            <br />
            and get apps to market faster
          </div>
          <div class="header-buttons">
            <button class="btn1">Free trial</button>
            <button class="btn2" onClick={handleOnToggleForm}>
              Talk to us
            </button>
          </div>
        </div>
        <div class="second-part">
          <img class="header-img" src={extra} alt="" />
          Our platform is extensible, easy-to-use, neutral, and works with your
          existing solutions, so you're free to choose the best technology for
          now and the future.
        </div>
      </div>
      <div class="section2">
        <p>We've got your back, no matter your stack</p>
        <p>
          We're building a world where anyone can safely use any technology,
          powered by their Identity.We've got your back, no matter your stack
          We're building a world where anyone can safely use any technology,
          powered by their Identity.
        </p>
      </div>
      <div class="section3">
        <div class="subsection1">
          <p>
            Our platform is extensible, easy-to-use, neutral, and works with
            your existing solutions, so you're free to choose the best
            technology for now and the future.
          </p>
          <p>Here's how we do it.</p>
        </div>
        <div class="subsection2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nostrum
          distinctio incidunt quo eaque delectus, dignissimos et voluptatibus
          eos. Esse.
        </div>
      </div>
      <div class="section4">
        <div class="img1">
          <a href="#">
            <img src={img3} alt="person-writting" />
          </a>
          <div class="image-contents">
            <h4>Customer Identity Cloud</h4>
            <p>
              Built to tackle both Consumer and SaaS Apps across every industry.
              Authenticate, authorize, and secure access for applications,
              devices, and users.ies Settings Your Privacy Choices
            </p>
          </div>
        </div>
        <div class="img2">
          <a href="#">
            <img src={img2} alt="people-cherring" />
          </a>
          <div class="image-contents">
            <h4>Workforce Identity Cloud</h4>
            <p>
              Secure your employees, contractors, and partners — wherever they
              are. Covers every part of the Identity lifecycle, from governance,
              to access, to privileged controls.
            </p>
          </div>
        </div>
      </div>

      <div class="section5">
        <div class="text">
          <p>Okta Showcase</p>
        </div>
        <div class="reference">
          <p>
            Hear our CEO, Todd McKinnon, and our product leaders <br />
            share how our newest innovations can help transform your
            organization.
          </p>
          <button class="refbtn">Watch on demand</button>
        </div>
      </div>
    </main>
  );
}
