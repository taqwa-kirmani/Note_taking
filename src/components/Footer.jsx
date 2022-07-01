import React from "react";

function Footer() {
  var today = new Date().getFullYear();
  return (
    <footer>
      <p> copyright © {today}</p>
    </footer>
  );
}

export default Footer;
