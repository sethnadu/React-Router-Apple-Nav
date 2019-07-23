import React from "react";
import { AppleData } from "./data.js"
// import { Route, Link} from "react-router-dom";

console.log(AppleData);
console.log((AppleData));
function NavWrapper() {
    return (
        <div className = "appleNav">
            <div className ="navSection">
                {/* {AppleData[].map(name => {
                    return name;
                })} */}
            </div>
        </div>
    )

}

export default NavWrapper;