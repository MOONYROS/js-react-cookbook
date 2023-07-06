import React from "react";

export default function SubmitForm({ onFormSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedText = e.target.nameField.value;
        const submittedDescription = e.target.descriptionField.value;
        const submittedIngredients = e.target.ingrList.value;
        onFormSubmit(submittedText, submittedDescription, submittedIngredients);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameField">Recipe Name:</label>
            <input
                id="nameField"
                name="nameField"
                placeholder="recipe name"
                type="text"
                required
            />
            <label htmlFor="descriptionField">Recipe Description:</label>
            <textarea
                id="descriptionField"
                name="descriptionField"
                placeholder="recipe description..."
                type="text"
                required
            />
            <label htmlFor="ingrList">Recipe Ingredients:</label>
            <textarea
                id="ingrList"
                name="ingrList"
                placeholder="ingredient 1, ingredient 2..."
                type="text"
                required
            />
            <button type="submit">Create Recipe</button>
        </form>
    );
}
