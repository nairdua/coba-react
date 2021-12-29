import React, { useState } from "react";
import "./WeatherDisplay.css"

function WeatherDisplay() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.city);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="city"><strong>City</strong></label>
                <input type="text" name="city"></input>
                <button type="submit">Find weather info...</button>
            </form>
        </div>
    )
}

export default WeatherDisplay