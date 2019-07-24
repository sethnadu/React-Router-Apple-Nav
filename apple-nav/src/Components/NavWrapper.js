import React, {useState} from "react";
import { AppleData } from "./data.js"
import Subnav from "./Subnav.js";
import { Route} from "react-router-dom";



function NavWrapper() {

    const [subNav, setSubNav] = useState();

  
    
    return (
        <div className = "appleNav">
            <div className ="navSection">
                {AppleData.map(data => {
                    return <img key ={data.name} src={data.name} alt = {data.name} onClick = {() => setSubNav(data.type)} />
                })}
            </div>
                <Route path="/:device/" render ={ props => {
                   return <Subnav {...props} AppleData = {AppleData} subNav ={subNav}/>
                }} />
                

        </div>

       
    )

}

export default NavWrapper;