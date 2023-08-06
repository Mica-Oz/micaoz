/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect, useRef } from "react";

import "./home.css";
import Block1 from "./Block1.js";
import Block2 from "./Block2.js";
import Block4 from "./Block4.js";
// import Block6 from "./Block6.js";

function Home() {
  return (
    <div className="flex">
      <div className="App">
        <div id="Row1">
          <Block1 id="Block1" />
          <Block2 id="Block1" />
        </div>
        <div id="Row2">
          <div id="Block3">
            {/* this div will have a custom frame by frame animation appear on hover */}
          </div>
          <Block4 id="Block4" />
          <div id="Block5">
            {/* this div will have color changing onClick functionality and one square will have an easter egg */}
          </div>
        </div>
        <div id="Row3">
          <div id="LeftHunk">
            <div id="LHunkRow1">
              <div id="Block6" />
              <div id="Block7">7</div>
            </div>
            <div id="LHunkRow2">
              <div id="Block10">10</div>
              <div id="Block11">11</div>
            </div>
            <div id="Block12">12</div>
          </div>
          <div id="Block8">8</div>
          <div id="RightHunk">
            <div id="Block9">9</div>
            <div id="Block13">13</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
