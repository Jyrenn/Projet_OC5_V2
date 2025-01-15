import React from "react";
import Logo from "../assets/Images/Logo_Blanc.png";
import "../scss/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="copyright">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
