import preloader from "../../../img/scorost-zagruzky.gif";
import React from "react";

let Preloader = (props) =>{
    return <div>
        {<img src={preloader} />}
    </div>
}
export default Preloader;