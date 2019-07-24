import React from "react";




function Subnav(props) {
    const array = props.subNav || [''];
    console.log(array)
    return (
        <div className = "subNav">
            <div className ="subNavSection">
                {array.map(data => 
                    <div key ={data}>{data}</div>
                )}
            </div>
                
        </div>

       
    )

}

export default Subnav;