import React from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  function Start() { // Start timer
    setTimerOn(true);
  }

  function Stop() { // Stop timer
    setTimerOn(false);
  }

  function Reset() { // Reset timer to 0
    setTime(0);
  }

  function ResetDoubleClick() {
    setTimerOn(false);
  }

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="stopwatch">
      <div className="title">
        <h2>Lutai Yevhenii</h2>
      </div>

      <div className="сlock_face">
        <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>

      <div className="functionals">
        <div id="buttons">
          <button
            onClick={() => {
              if (!timerOn) {
                Start();
              } else if (time > 0) {
                Stop();
                Reset();
              }
            }}
          >
            Start / Stop
          </button>
          <button onDoubleClick={ResetDoubleClick}>Wait</button>
          <button
            onClick={() => {
              Reset();
              Start();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
