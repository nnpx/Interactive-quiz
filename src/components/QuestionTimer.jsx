import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeOut, timeout); // call onTimeOut when the timeout is up

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    // console.log("SETTING INTERVAL");

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
