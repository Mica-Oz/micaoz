import React, { useEffect, useRef } from "react";

import "./Block2.css";

function Block2() {
  return (
    <div id="block2">
      <div id="row1">
        <a className="icon" id="insta" href="https://www.instagram.com/mica.oz">
          <img id="igicon" alt="ig" src="instagram.svg" />
        </a>
        <a
          className="icon"
          id="linkedin"
          href="https://www.instagram.com/mica.oz"
        >
          <img alt="LI"></img>
        </a>
        <a
          className="icon"
          id="newsletter"
          href="https://www.instagram.com/mica.oz"
        >
          <img alt="NL"></img>
        </a>
      </div>
      <div id="row2">
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </div>
  );
}

export default Block2;
