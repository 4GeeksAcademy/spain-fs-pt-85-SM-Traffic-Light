import React, { useState } from "react";


// import {redColourHook, yellowColourHook, greenColourHook} from "..";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const purpleStyles = {
    backgroundColor: "#7633F9"
}

const Home = () => {
	// definición de los hooks
	let [redColour, setRedColour] = useState("bg-light");
    let [yellowColour, setYellowColour] = useState("bg-light");
    let [greenColour, setGreenColour] = useState("bg-light");
    let [purpleColourVisibility, setPurpleColourVisibility] = useState("d-none")
	// definición de las funciones para manejar los hooks
    let redColourHandler = () => {
        setRedColour("bg-danger");
        setYellowColour("bg-light");
        setGreenColour("bg-light");
    }
    let yellowColourHandler = () => {
        setRedColour("bg-light");
        setYellowColour("bg-warning")
        setGreenColour("bg-light");
    }
    let greenColourHandler = () =>{
        setRedColour("bg-light");
        setYellowColour("bg-light");
        setGreenColour("bg-success");
    }
    let purpleColourHandler = () =>{
        setRedColour("bg-light");
        setYellowColour("bg-light");
        setGreenColour("bg-light");
        purpleColourVisibility === "d-none"
        ? setPurpleColourVisibility("d-block")
        : setPurpleColourVisibility("d-none");
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
                <div className={`col-1 rounded-circle p-5 m-3 ${"purple"} ${purpleColourVisibility} mx-auto`}></div>
			</div>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-dark m-3" onClick={purpleColourHandler}>Rave time!</button>
                <button type="button" class="btn btn-info m-3" onClick={purpleColourHandler}>Click me</button>
            </div>
		</>
    );
}

export default Home;
