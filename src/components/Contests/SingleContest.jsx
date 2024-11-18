import React, { useState, useEffect } from 'react';

const SingleContest = () => {

    const contestStartTime = new Date('2024-11-18T20:50:00');
    const contestDuration = 0.5 * 60 * 1000;
    const contestEndTime = new Date(contestStartTime.getTime() + contestDuration);

    const [status, setStatus] = useState('waiting');
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const updateTimer = () => {
            const currentTime = new Date();

            if (currentTime < contestStartTime) {

                const diff = contestStartTime - currentTime;
                updateTimeLeft(diff);
                setStatus('waiting');
            } else if (currentTime >= contestStartTime && currentTime < contestEndTime) {

                const diff = contestEndTime - currentTime;
                updateTimeLeft(diff);
                setStatus('running');
            } else {

                setTimeLeft('');
                setStatus('ended');
            }
        };

        const updateTimeLeft = (diff) => {
            const minutes = Math.floor(diff / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setTimeLeft(`${minutes}m ${seconds}s`);
        };

        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, [contestStartTime, contestEndTime]);

    return (
        <div>
            {status === 'waiting' && (
                <div>
                    <h1>The contest will start at 8:00 AM on 25th November.</h1>
                    {timeLeft && <p>Time remaining to start: {timeLeft}</p>}
                </div>
            )}
            {status === 'running' && (
                <div>
                    <h1>The contest is live! 🎉</h1>
                    <p>Time remaining: {timeLeft}</p>

                </div>
            )}
            {status === 'ended' && (
                <div>
                    <h1>The contest has ended. Thank you for participating!</h1>
                </div>
            )}
        </div>
    );
};

export default SingleContest;
