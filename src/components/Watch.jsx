import { useEffect, useState } from "react";
import "../stylesheets/watch.css"
import beep from "../sounds/Soft Alarm - LG stock alarm tone.mp3"

function Watch() {
    const [sessionlength, setSessionlength] = useState(25)
    const [breaklength, setBreaklength] = useState(5)
    const [min, setMin] = useState(25)
    const [sec, setSec] = useState(0)
    const [play, setPlay] = useState(false);
    const [label, setLabel] = useState("Session")
    useEffect(()=>{
        if(play){
            const interval = setInterval(() => {
                if(sec === 0 && min === 0){
                    document.getElementById("beep").play();
                    setTimeout(() => {
                        document.getElementById("beep").pause();
                        document.getElementById("beep").currentTime = 0;
                    }, 3000)
                    if(label === "Session"){
                        setMin(breaklength);
                        setSec(0);
                        setLabel("Break")
                    } else {
                        setMin(sessionlength);
                        setSec(0);
                        setLabel("Session")
                    }
                } else {
                    if(sec > 0) {
                        setSec(s => s-1)
                    } else {
                        setMin(m => m-1);
                        setSec(59)
                    }
                }
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [sec, play, min, sessionlength, breaklength])

    function handleClick(e){
        switch(e){
            case "down-break":
                if(breaklength > 1){
                    if(!play){
                        setBreaklength(breaklength - 1);
                        if(label === "Break"){
                            setMin(breaklength - 1);
                            setSec(0)
                        }
                    }
                }
            break;
            case "up-break":
                if(breaklength < 60){
                    if(!play){
                        setBreaklength(breaklength + 1);
                        if(label === "Break"){
                            setMin(breaklength + 1);
                            setSec(0)
                        }
                    }
                }
            break;
            case "down-session":
                if(sessionlength > 1){
                    if(!play){
                        setSessionlength(sessionlength-1);
                        if(label === "Session"){
                            setMin(sessionlength-1);
                            setSec(0)
                        }
                    }
                }
            break;
            case "up-session":
                if(sessionlength < 60){
                    if(!play){
                        setSessionlength(sessionlength+1);
                        if(label === "Session"){
                            setMin(sessionlength+1);
                            setSec(0)
                        }
                    }
                }
            break;
            case "restart":
                setLabel("Session")
                setSessionlength(25);
                setBreaklength(5);
                setMin(25);
                setSec(0);
                setPlay(false);
                document.getElementById("beep").pause()
                document.getElementById("beep").currentTime = 0
            break;
            case "play":
                setPlay(!play);
            break;
            default:
                setSessionlength(sessionlength);
                setBreaklength(breaklength);
                setMin(min);
                setSec(sec);
                setPlay(play);
            break;
        }
    }
    return (
        <div className="d-flex align-items-center flex-column border border-3 rounded-5 border-primary watch pt-4 pb-4 gap-5 shadow bg-light">
            <h1 className="text-dark lato-italy grand-l" id="timer-label">{label} Relox</h1>
            <h2 className="text-primary-emphasis lato-bold grand" id="time-left">{sec < 10 ? (min < 10 ? "0"+ min + ":0" + sec : min + ":0" + sec) : (min < 10 ? "0"+ min + ":" + sec : min + ":" + sec)}</h2>
            <div className="d-flex justify-content-space-between gap-4">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="text-dark-emphasis lato-italy" id="break-label">Break Length</h3>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <i className="bi bi-caret-down" id="break-decrement" onClick={() => handleClick("down-break")}></i>
                        <h3 className="text-dark-emphasis lato-bold m-0 p-0" id="break-length">{breaklength}</h3>
                        <i className="bi bi-caret-up" id="break-increment" onClick={() => handleClick("up-break")}></i>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="text-dark-emphasis lato-italy" id="session-label">Session Length</h3>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <i className="bi bi-caret-down" id="session-decrement" onClick={() => handleClick("down-session")}></i>
                        <h3 className="text-dark-emphasis lato-bold m-0 p-0" id="session-length">{sessionlength}</h3>
                        <i className="bi bi-caret-up" id="session-increment" onClick={() => handleClick("up-session")}></i>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <i className="bi bi-play-circle fs-2" id="start_stop" onClick={() => handleClick("play")}></i>
                <i className="bi bi-arrow-clockwise fs-2" id="reset" onClick={() => handleClick("restart")}></i>
            </div>
            <audio src={beep} id="beep" className="d-none" loop={true}></audio>
        </div>
    );
}

export default Watch;