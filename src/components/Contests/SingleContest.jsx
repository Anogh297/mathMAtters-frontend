import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SingleContest = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState("00:00:00");
    const navigate =  useNavigate();

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return { total, hours, minutes, seconds };
    };

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9 ? minutes : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        setTimer("00:00:15"); 
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 15); // Set the timer to 1 minute
        return deadline;
    };

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    return (
        <div className="text-center mx-auto font-mons">
            <h1>MathMatters</h1>
            <h3>Contest Starts in</h3>
            <h2>{timer}</h2>
            {timer == "00:00:00" ?<><img src="https://i.pinimg.com/736x/2d/29/7d/2d297d9d8bf128d1bd63436be8432131.jpg" alt="" /></>:<>Hello World</>}
            <button onClick={onClickReset} className="btn btn-primary">
                Reset
            </button>
        </div>
    );
};

export default SingleContest;
