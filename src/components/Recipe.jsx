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
            <h3>{recipeName}</h3>
            <RecipeChapter heading={"Description"} content={description} />
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
            <RecipeChapter heading={"Procedure"} content={procedure} />
            <button type="button" onClick={handleDeleteClick}>
                Delete Recipe
            </button>
        </>
    );
}
