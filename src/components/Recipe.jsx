import React from "react";
import RecipeChapter from "./RecipeChapter";

export default function Recipe({
    recipeName,
    description,
    ingredients,
    procedure,
    onDelete,
}) {
    const handleDeleteClick = () => {
        onDelete();
    };

    return (
        <>
            <h2>{recipeName}</h2>
            <RecipeChapter
                heading={"Description"}
                content={<p>{description}</p>}
            />
            <RecipeChapter
                heading={"Ingredients"}
                content={
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                }
            />
            <RecipeChapter
                heading={"Preparation"}
                content={<p>{procedure}</p>}
            />
            <button type="button" onClick={handleDeleteClick}>
                Delete Recipe
            </button>
        </>
    );
}
