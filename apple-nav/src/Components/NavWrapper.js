import React, {useState} from "react";
import { AppleData } from "./data.js"
import Subnav from "./Subnav.js";
import { Route, Link} from "react-router-dom";



function NavWrapper() {

    const [subNav, setSubNav] = useState();

  
    
    return (
        <div className = "appleNav">
            <div className ="navSection">
                {AppleData.map(data => {
                    return <Link to={`/${data.id}`}> <img key ={data.id} src={data.name} 
                    alt = {data.name} onClick = {() => setSubNav(data.type)} /></Link>
                })}
            </div>
                <Route path="/:device/" render ={ props => {
                   return <Subnav {...props} AppleData = {AppleData} subNav ={subNav}/>
                }} />
                

        </div>

       
    )

}

export default NavWrapper;