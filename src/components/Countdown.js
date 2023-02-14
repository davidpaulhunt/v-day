import React, { useEffect, useState } from "react";
import { WiredDivider } from "wired-elements-react/lib/WiredDivider";

function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`2/24/2023`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <small>
        {timeLeft[interval]} {interval}{" "}
      </small>
    );
  });

  return (
    <div style={{ backgroundColor: "white" }} className="fixed-top">
      <h1>Kissing you again in {timerComponents.length ? timerComponents : <span>We're together!</span>}</h1>
      <WiredDivider />
    </div>
  );
}

export default Countdown;
