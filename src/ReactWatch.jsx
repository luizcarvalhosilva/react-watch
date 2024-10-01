import React, {useState, useEffect} from "react";

function reactWatch() {

    const [time, setTime] = useState(new Date());
    const [altTime, setAltTime] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, []);

    const toggleChange = () => {
        setAltTime(!altTime);
    }


    const timeFormat = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const isPM = hours >= 12;

        if (altTime) {
            hours = hours % 12 || 12;
            return `${digitZero(hours)}:${digitZero(minutes)}:${digitZero(seconds)} ${altTime ? (isPM ? "PM":"AM") : ""}` 
        }
        
        return `${digitZero(hours)}:${digitZero(minutes)}:${digitZero(seconds)}`
    }


    const digitZero = (num) => {
        return (num < 10 ? "0" : "") + num;
    }

    return(
        <>  
            <header></header>
            <button className="change-btn" onClick={toggleChange}>
                {altTime ? "Switch to 24h" : "Switch to AM / PM"}
            </button>
            <section className="container">
                <div className="digital-clock">
                    <span>
                        {timeFormat()}
                    </span>
                </div>
            </section>
        </>
    );
}

export default reactWatch;