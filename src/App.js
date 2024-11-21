import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  // Handle the "Start Meeting" click
  const handleStartMeeting = () => {
    // Show a loading message while the meeting page loads
    const loadingMessage = document.createElement("div");
    loadingMessage.innerHTML = "Loading meeting... Please wait.";
    document.body.appendChild(loadingMessage);

    // After a short delay, redirect to the WebRTC meeting page
    setTimeout(() => {
      window.location.href = '/WEB_UIKITS.HTML';  // Change this to the path of your Zego WebRTC file
    }, 500); // Give some time to show loading message
  };

  useEffect(() => {
    // Ensure the Start Meeting button is linked to the handler
    const startMeetingBtn = document.getElementById("startMeetingBtn");
    if (startMeetingBtn) {
      startMeetingBtn.addEventListener("click", handleStartMeeting);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (startMeetingBtn) {
        startMeetingBtn.removeEventListener("click", handleStartMeeting);
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button className="App-link">
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
