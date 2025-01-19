import React, { useState, useRef } from "react";


// import {redColourHook, yellowColourHook, greenColourHook} from "..";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    // definición de los hooks
    let [redColour, setRedColour] = useState("bg-light");
    let [yellowColour, setYellowColour] = useState("bg-light");
    let [greenColour, setGreenColour] = useState("bg-light");
    let [purpleColourVisibility, setPurpleColourVisibility] = useState("d-none");
    let [purpleColour, setPurpleColour] = useState("bg-light");
    let [raveTimeVisibility, setRaveTimeVisibility] = useState("btn btn-dark m-3");
    let [stopRaveTimeVisibility, setStopRaveTimeVisibility] = useState("d-none");
    let intervalRef = useRef(null);
    // definición de las funciones para manejar los hooks
    let redColourHandler = () => {
        setRedColour("bg-danger");
        setYellowColour("bg-light");
        setGreenColour("bg-light");
        setPurpleColour("bg-light");
    }
    let yellowColourHandler = () => {
        setRedColour("bg-light");
        setYellowColour("bg-warning")
        setGreenColour("bg-light");
        setPurpleColour("bg-light");
    }
    let greenColourHandler = () => {
        setRedColour("bg-light");
        setYellowColour("bg-light");
        setGreenColour("bg-success");
        setPurpleColour("bg-light");

    }
    let purpleColourButtonHandler = () => {
        stopRaveTime();
        purpleColourVisibility === "d-none"
            ? setPurpleColourVisibility("d-block")
            : setPurpleColourVisibility("d-none");
        if (purpleColourVisibility === "d-none" && purpleColour === "purple") {
            setPurpleColour("bg-light");
        }
    }

    let purpleColourHandler = () => {
        setRedColour("bg-light");
        setYellowColour("bg-light");
        setGreenColour("bg-light");
        setPurpleColour("purple");
    }

    let raveTimeHandler = () => {
        setRaveTimeVisibility("d-none");
        setStopRaveTimeVisibility("btn btn-danger m-3")
        const trafficLight = [redColourHandler, yellowColourHandler, greenColourHandler, purpleColourHandler];
        let currentTraficLightIndex = 0;
        const intervalID = setInterval(() => {
            if (purpleColourVisibility === "d-none" && trafficLight.length-1 === currentTraficLightIndex) currentTraficLightIndex = 0
            trafficLight[currentTraficLightIndex]();
            currentTraficLightIndex++;
            if (trafficLight.length === currentTraficLightIndex) currentTraficLightIndex = 0
        }, 1000)
        intervalRef.current = intervalID;
    }

    function stopRaveTime() {
        setRedColour("bg-light");
        setYellowColour("bg-light");
        setGreenColour("bg-light");
        setPurpleColour("bg-light");
        setRaveTimeVisibility("btn btn-dark m-3");
        setStopRaveTimeVisibility("d-none")
        const intervalID = intervalRef.current;
        clearInterval(intervalID);
    }

    return (
        <>
            <div className="d-flex gap-5 justify-content-center">
                <div className="d-flex bd-h-48 text-dark">
                    <div className="vr border-5 opacity-100"></div>
                </div>
            </div>
            <div className=" col-1 mx-auto bg-dark p-3 rounded">
                <div className={`col-1 rounded-circle p-5 m-3 mx-auto ${redColour}`} onClick={redColourHandler}></div>
                <div className={`col-1 rounded-circle p-5 m-3 ${yellowColour} mx-auto`} onClick={yellowColourHandler}></div>
                <div className={`col-1 rounded-circle p-5 m-3 ${greenColour} mx-auto`} onClick={greenColourHandler}></div>
                <div className={`col-1 rounded-circle p-5 m-3 ${purpleColour} ${purpleColourVisibility} mx-auto`} onClick={purpleColourHandler}></div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-info m-3" onClick={purpleColourButtonHandler}>Click me</button>
                <button type="button" className={raveTimeVisibility} onClick={raveTimeHandler}>Rave time</button>
                <button type="button" className={stopRaveTimeVisibility} onClick={stopRaveTime}>Stop!</button>
            </div>
        </>
    );
}

export default Home;
