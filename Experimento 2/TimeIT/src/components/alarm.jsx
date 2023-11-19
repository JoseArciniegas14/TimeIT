import React, { useState, useEffect } from "react";

function Alarm() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAlarmChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleAlarmSet = () => {
    setAlarmSet(true);
  };

  const handleAlarmStop = () => {
    setAlarmSet(false);
  };

  useEffect(() => {
    if (alarmSet) {
      const alarmInterval = setInterval(() => {
        if (time === alarmTime) {
          alert("Time's up!");
          setAlarmSet(false);
        }
      }, 1000);
      return () => clearInterval(alarmInterval);
    }
  }, [alarmSet, alarmTime, time]);

  return (
    <div>
      <h1>{time}</h1>
      <label>
        Set alarm:
        <input type="time" value={alarmTime} onChange={handleAlarmChange} />
      </label>
      <br />
      <button onClick={handleAlarmSet}>Set Alarm</button>
      <button onClick={handleAlarmStop}>Stop Alarm</button>
    </div>
  );
}

export default Alarm;
