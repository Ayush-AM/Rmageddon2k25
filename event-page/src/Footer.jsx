import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div class="footer-content">
            <div class="social-media">
                <a href="https://www.facebook.com" target="_blank" class="social-link">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" class="social-link">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" class="social-link">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <h1 class="footer-title">RNXG</h1>
            <p class="footer-text">
                Robotics for Next Generation provides the best platform to work on different problem statements and to create the best solutions for them.
            </p>
            <hr class="footer-divider"/>
            <p class="footer-copyright">
                Copyright Ⓒ 2023 RNXG. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
