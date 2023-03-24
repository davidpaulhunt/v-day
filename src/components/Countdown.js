import React, { useEffect, useState } from "react";
import { WiredDivider } from "wired-elements-react/lib/WiredDivider";

const targetDate = new Date("July 7, 2023 00:00:00").getTime();

function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let timeLeft = {};

    if (distance > 0) {
      timeLeft = {
        days, hours, minutes, seconds
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
      <small key={interval}>
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
