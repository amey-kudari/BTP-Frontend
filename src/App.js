import './App.css';
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineArrowLeft } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const [shownav, setShownav] = useState(true);
  function toggleNav() {
    setShownav(!shownav);
  }
  return (
    <div className="App">
      <div className="Content">
        <div
          className="sidebar"
          style={
            shownav
              ? { width: '16rem', opacity: '1', transition: 'all 0.1s ease-out' }
              : {
                  width: '0',
                  transform: 'translateX(-16rem)',
                  transition: 'all 0.1s ease-out',
                }
          }>
          <button
            className="sidebar-button-2"
            onClick={toggleNav}>
              <AiOutlineLeft />
          </button>
          <p className="sidebar-text button-text"> WQI </p>
          <p className="sidebar-text button-text"> ET </p>
          <p className="sidebar-text button-text"> DROUGHT </p>
          {/* <p>ASDF</p> */}
        </div>
        <div id="Header" className="header">
          <div 
            style={
              !shownav
                ? { opacity: '1', transition: 'all 0.1s ease-out' }
                : { opacity: '0', transition: 'all 0.1s ease-out' }
            }>
            {!shownav && (
              <button
                onClick={toggleNav} className="sidebar-button">
                <GiHamburgerMenu />
              </button>
            )}
          </div>
          <p className="sidebar-text"> HYDROLOGY TOOL IIIT-H</p>
          <button
            className="sidebar-button-1">
            <AiOutlineArrowLeft />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
