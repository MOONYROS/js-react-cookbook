import React from "react";

export default function TestComponent({
    recipeName,
    description,
    ingredients,
    onDelete,
}) {
    const handleDeleteClick = () => {
        onDelete();
    };

    return (
        <>
            <h3>{recipeName}</h3>
            <p>{description}</p>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button type="button" onClick={handleDeleteClick}>
                Delete Recipe
            </button>
        </>
    );
}
