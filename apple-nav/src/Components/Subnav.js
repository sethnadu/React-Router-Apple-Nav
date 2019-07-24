import React from "react";




function Subnav(AppleData) {
    console.log(AppleData)
    return (
        <div className = "appleNav">
            <div className ="navSection">
                {AppleData.map(data => {
                    return <span key ={data.type}>{data.type}</span>
                })}
            </div>
                
        </div>

       
    )

}

export default Subnav;