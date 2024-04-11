import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function sendEmail(fromName, stopwatchNumber, elapsedTime, recipientEmail) {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    const emailParams = {
        from_name: fromName,
        to_name: 'Nayana Tara',
        recipient_email: recipientEmail,
        stopwatch_number: stopwatchNumber,
        elapsed_time: elapsedTime,
    };

    emailjs.send(serviceId, templateId, emailParams, userId)
        .then((response) => {
            console.log('Email sent successfully:', response);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
}

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [fromName, setFromName] = useState('');

    let timer;

    function start() {
        setIsRunning(true);
        timer = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
        }, 1000);
    }
    
    function stop() {
        setIsRunning(false);
        clearInterval(timer);
    }
   
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);    
        clearInterval(timer);
    }

    function formatTime() {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000) % 60;

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        return `${minutes}:${seconds}`;
    }

    function handleEmailSend(stopwatchTimes) {
        const recipientEmail = prompt('Enter your email address:');
        const fromName = prompt('Enter your name:');
        if (recipientEmail && fromName) {
            sendEmail(fromName, stopwatchTimes, formatTime(), recipientEmail);
        }
    }
    
    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
                <button onClick={() => handleEmailSend('Stopwatch')} className="email-button">Email Time</button>
            </div>
        </div>
    );
}

function AudioPlayer() {
    console.log("Rendering AudioPlayer component");
    return (
        <div className="audio-player" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '9999' }}>
            <audio controls>
                <source src="/assets/Beloved.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <Stopwatch />
            <AudioPlayer />
        </div>
    );
}






