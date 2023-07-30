import React, { useRef, useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = (countdownDate) => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  };

  function saveInLocalStorage(time) {
    localStorage.setItem("timer", time);
  }

  function getTimeFromLocalStorage() {
    return localStorage.getItem("timer");
  }

  useEffect(() => {
    const localTimer = getTimeFromLocalStorage();

    if (localTimer) {
      interval.current = setInterval(() => {
        startTimer(+localTimer);
      }, 1000);
    } else {
      const countdownDate = new Date("August 28, 2023 00:00:00").getTime();
      saveInLocalStorage(countdownDate);
      interval.current = setInterval(() => {
        startTimer(+countdownDate);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, []);
  

  return (
    <main className='container-fluid'>
      <img src='./assets/bg4.jpg' alt='bg4'/>
    <div className='section-1'>
    <div className='logo'>
        <img src='./assets/logo2.png' />
      </div>
     
      <h1>We are Coming Soon...</h1>
     
      <p>Our website is under construction. Something really cool is coming!</p>
      <div className='timer'>
      
      Days: {timerDays} &nbsp; Hours: {timerHours} &nbsp;
      Minutes: {timerMinutes} &nbsp; Seconds: {timerSeconds} &nbsp;
    
      </div>     
      <p>Subscribe now to get the latest update for the Grand Day!</p>
      <div className='section-2'>
        <textarea className='mail-box1' placeholder='enter email address'/>
        <button className='notify-button'>Notify Me!</button>
      </div>
    </div>
    
    </main>
  )
}

export default App;