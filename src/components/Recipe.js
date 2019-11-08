import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="card bg-light recipes-list__item">
            <img className="card-img-top" src={image} alt={title}/>
            <h3 className="card-header">{title}</h3>
            <div className="card-body">
                <p className="card-title">Calories: {calories}</p>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li className="card-text" key={index}>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Recipe;