/* eslint-disable react/prop-types */
import React from "react";

export default function HelloWorld(props) {

    const {userInfo, saludarFn} = props
    const {name = "user", age = 0, region= "Planeta xD"} = userInfo
    const {country} = region

    return(
        <div>
            <button onClick={ ()=>saludarFn(name, age, country)}>Hi</button>
        </div>
    )
}

