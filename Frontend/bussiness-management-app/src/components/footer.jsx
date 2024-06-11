import React from "react";
import logo from "./ASHIFY (1).png";


export default function Footer() {
  return (
    <footer>
      <div class="contents">
        <div class="logo-contacts">
          <img class="logo" src={logo} alt="logo" />
          <p>
            To connect with a product expert today, use our chat box, email us,
            or call +1-800-425-1267.
          </p>
        </div>
        <div class="company">
          <h4>Company</h4>
          <ul>
            <li><a href="@">About Us</a></li>
            <li><a href="@">Our Customers</a></li>
            <li><a href="@">Leadership</a></li>
            <li><a href="@">Investors</a></li>
            <li><a href="@">Careers</a></li>
            <li><a href="@">Events</a></li>
            <li></li>
            <li><a href="@">Press Room</a></li>
            <li><a href="@">Responsibility</a></li>
            <li><a href="@">ASHIFY for Good</a></li>
            <li><a href="@">Diversity, Inclusion & Belonging</a></li>
          </ul>
        </div>
        <div class="Starting-with-Okta">
          <h4>Starting with ASHIFY</h4>
          <ul>
            <li><a  href="@">The Okta Advantage</a></li>
            <li><a href="@">Our Customers</a></li>
            <li><a href="@">Customer Identity Cloud</a></li>
            <li><a href="@">Workforce Identity Cloud</a></li>
            <li><a href="@">Free Trial</a></li>
            <li><a href="@">Pricing</a></li>
            <li></li>
            <li><a href="@">Contact Sales</a></li>
            <li><a href="@">Trust</a></li>
            <li><a href="@">Accessibility</a></li>
          </ul>
        </div>
        <div class="Help-Support">
          <h4>Help & Support</h4>
          <ul>
            <li><a href="@">Help and Support</a></li>
            <li><a href="@">Frequently Asked Questions</a></li>
            <li><a href="@">Contact Us</a></li>
            <li><a href="@">Customer Identity Cloud Status</a></li>
            <li><a href="@">Workforce Identity Cloud Status</a></li>
          </ul>
        </div>
      </div>
    </footer>

  );
}
