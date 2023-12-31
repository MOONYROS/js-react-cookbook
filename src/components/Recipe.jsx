import React, { useState } from "react";
import RecipeChapter from "./RecipeChapter";

export default function Recipe({
    recipeName,
    description,
    ingredients,
    procedure,
    onDelete,
    onUpdate,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState({
        recipeName,
        description,
        ingredients,
        procedure,
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedRecipe({
            recipeName,
            description,
            ingredients,
            procedure,
        });
    };

    const handleSaveClick = () => {
        onUpdate({
            recipeName: editedRecipe.recipeName,
            description: editedRecipe.description,
            ingredients: editedRecipe.ingredients,
            procedure: editedRecipe.procedure,
        });
        setIsEditing(false);
    };

    const handleDeleteClick = () => {
        onDelete();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "ingredients") {
            const formattedValue = value
                .replace(/\s+/g, " ")
                .replace(/,\s+/g, ",");
            setEditedRecipe((prevRecipe) => ({
                ...prevRecipe,
                ingredientsInput: value,
                ingredients: formattedValue.split(","),
            }));
        } else {
            setEditedRecipe((prevRecipe) => ({
                ...prevRecipe,
                [name]: value,
            }));
        }
    };

    if (isEditing) {
        return (
            <div id="recipeEdit">
                <label htmlFor="recipeNameField">Recipe Name:</label>
                <input
                    id="recipeNameField"
                    name="recipeName"
                    value={editedRecipe.recipeName}
                    onChange={handleInputChange}
                    placeholder="Type new name..."
                />

                <label htmlFor="descriptionField">Recipe Description:</label>
                <textarea
                    id="descriptionField"
                    name="description"
                    value={editedRecipe.description}
                    onChange={handleInputChange}
                    placeholder="Type new description..."
                />

                <label htmlFor="ingrList">Recipe Ingredients:</label>
                <textarea
                    id="ingrList"
                    name="ingredients"
                    value={editedRecipe.ingredientsInput}
                    onChange={handleInputChange}
                    placeholder="Type new ingredients..."
                />

                <label htmlFor="procedureField">Procedure:</label>
                <textarea
                    id="procedureField"
                    name="procedure"
                    value={editedRecipe.procedure}
                    onChange={handleInputChange}
                    placeholder="Type new procedure..."
                />

                <button id="save" onClick={handleSaveClick}>
                    Save
                </button>
                <button id="cancel" onClick={handleCancelClick}>
                    Cancel
                </button>
            </div>
        );
    }

    return (
        <>
            <h2>{editedRecipe.recipeName}</h2>
            <RecipeChapter
                heading={"Description"}
                content={<p>{editedRecipe.description}</p>}
            />
            <RecipeChapter
                heading={"Ingredients"}
                content={
                    <ul>
                        {editedRecipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                }
            />
            <RecipeChapter
                heading={"Preparation"}
                content={<p>{editedRecipe.procedure}</p>}
            />
            <button
                className="recipeButton"
                id="edit"
                type="button"
                onClick={handleEditClick}
            >
                Edit Recipe
            </button>
            <button
                className="recipeButton"
                id="delete"
                type="button"
                onClick={handleDeleteClick}
            >
                Delete Recipe
            </button>
        </>
    );
}
