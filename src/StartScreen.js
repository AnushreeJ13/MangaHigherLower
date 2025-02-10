// StartScreen.js
import React, { useState } from "react";
import header_image from './header.png'
function StartScreen({ handleStart, metricToggle, setMetricToggle, isMusicOn, toggleMusic }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="start-container">
        
      <div className="header-animation">
        
        <h1>PRICE CLASH</h1>
          <img src={header_image}/>
        
        <p>
            
          Test your market instincts by predicting whether a commodity is valued higher or lower than its competitor.
          Outwit the market and rise to the top!
        </p>
      </div>

      <div className="game-mode-container">
        <button className="game-mode-button" onClick={() => handleStart("Classic")}>
          Classic
        </button>
        <button className="game-mode-button" onClick={() => handleStart("Beat The Clock")}>
          Beat The Clock
        </button>
      </div>
    <br/>
      <div className="metric-toggle">
        <button
          className={metricToggle ? "active" : ""}
          onClick={() => setMetricToggle(true)}
        >
          Dual Comparison
        </button>
        <button
          className={!metricToggle ? "active" : ""}
          onClick={() => setMetricToggle(false)}
        >
          Single Price Prediction
        </button>
      </div>
      <div classname="settings">
        <button className="settings-button" onClick={() => setShowSettings(true)}>
          Settings
        </button>
      </div>
      

      {showSettings && (
        <div className="settings-panel">
          <h2>Settings</h2>
          <div className="setting-item">
            <label>Music:</label>
            <button onClick={toggleMusic} className="music-toggle">
              {isMusicOn ? "Turn On" : "Turn Off"}
            </button>
          </div>
          <button className="close-settings" onClick={() => setShowSettings(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default StartScreen;
