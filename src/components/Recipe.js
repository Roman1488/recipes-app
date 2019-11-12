import React, {useState} from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    const [isOpen, setIsOpen] = useState(false);
    const $ingredients = isOpen && <ul className="recipes__ingredients">
                        {ingredients.map((ingredient, index) => (
                            <li className="card-text" key={index}>{ingredient.text}</li>
                        ))}
                        </ul>;
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className="card bg-light recipes-list__item">
            <img className="card-img-top" src={image} alt={title}/>
            <h3 className="card-header">{title}</h3>
            <div className="card-body">
                <p className="card-title">Calories: {calories}</p>
                <button className="btn btn-primary" onClick={handleClick}>
                    { isOpen ? 'Hide ingredients' : 'Show ingredients' }
                </button>
                {$ingredients}
            </div>
        </div>
    );
};

export default Recipe;