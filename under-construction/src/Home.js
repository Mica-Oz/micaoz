/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useEffect, useRef } from "react";

import "./home.css";

function Home() {
  return (
    <div className="flex">
      <div className="App">
        <div id="Row1">
          <div id="Block1">1</div>
          <div id="Block2">2</div>
        </div>
        <div id="Row2">
          <div id="Block3">3</div>
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
