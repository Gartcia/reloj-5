import { useState } from "react";
import "../stylesheets/watch.css"

function Watch() {
    const [sessionlength, setSessionlength] = useState(25)
    const [breaklength, setBreaklength] = useState(5)
    const [session, setSession] = useState("25:00")
    function handleClick(e){
        switch(e){
            case "down-break":
                if(breaklength > 1){
                    setBreaklength(breaklength - 1);
                }
            break;
            case "up-break":
                if(breaklength < 60){
                    setBreaklength(breaklength + 1);
                }
            break;
            case "down-session":
                if(sessionlength > 1){
                    setSessionlength(sessionlength-1);
                    setSession((sessionlength-1) + ":00");
                }
            break;
            case "up-session":
                if(sessionlength < 60){
                    setSessionlength(sessionlength+1);
                    setSession((sessionlength+1) + ":00");
                }
            break;
            case "restart":
                setSessionlength(25);
                setBreaklength(5);
                setSession("25:00");
            break;
            case "play":
            break;
            default:
                setSessionlength(sessionlength);
                setBreaklength(breaklength);
                setSession(session);
            break;
        }
    }
    return (
        <div className="d-flex align-items-center flex-column border border-3 rounded-5 border-primary watch pt-4 pb-4 gap-5 shadow bg-light">
            <h1 className="text-dark lato-italy grand-l" id="time-left">React Relox</h1>
            <h2 className="text-primary-emphasis lato-bold grand" id="time-left">{session}</h2>
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
                <i class="bi bi-play-circle fs-2" id="start_stop" onClick={() => handleClick("play")}></i>
                <i class="bi bi-arrow-clockwise fs-2" id="start_stop" onClick={() => handleClick("restart")}></i>
            </div>
        </div>
    );
}

export default Watch;