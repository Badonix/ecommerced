import React from "react";
import './footer.css'
export default function Footer() {
  return (
    <div>
      {" "}
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>PlywoodHub</h3>

          <p class="footer-links">
            <a href="#">მთავარი</a>|<a href="#">ავეჯი</a>|
            <a href="#">ჩვენს შესახებ</a>|<a href="#">პანელები</a>
          </p>

          <p class="footer-company-name">
            Copyright © 2023 <strong>SandroCh</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-phone"></i>
            <p>+995 511 19 99 50</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">plywoodhub@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>კომპანიის შესახებ</span>
            <strong>plywoodhub</strong> არის ავეჯის მწარმოებელი კომპანია,
            რომელიც გთავზობთ თანამედროვე და დახვეწილ დიზაინს. დანარჩენი
            ინფორმაცია შეგიძლიათ იხილოთ <strong>ჩვენს შესახებ</strong>
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
