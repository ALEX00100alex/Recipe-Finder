import React from "react";

const Receipe = ({title, cuisinetype, ingredients, calories, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>Cuisine Type: {cuisinetype}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Calories: {calories}</p>
            <img src = {image} alt=""/>
        </div>
    )
}

export default Receipe;