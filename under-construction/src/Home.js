/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect, useRef } from "react";

import "./home.css";
import Block1 from "./Block1.js";
import Block2 from "./Block2.js";

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
          <div id="Block4"></div>
          <div id="Block5">5</div>
        </div>
        <div id="Row3">
          <div id="LeftHunk">
            <div id="LHunkRow1">
              <div id="Block6">6</div>
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
