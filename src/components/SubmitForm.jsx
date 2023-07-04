import React from "react";

export default function SubmitForm({ onFormSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedText = e.target.inputField.value;
        onFormSubmit(submittedText);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameField">Recipe Name:</label>
            <input
                id="nameField"
                name="nameField"
                placeholder="type recipe name"
                type="text"
                required
            />
            <label htmlFor="nameField">Recipe Description:</label>
            <input
                id="decriptionField"
                name="decriptionField"
                placeholder="type recipe name"
                type="text"
                required
            />
            <button type="submit">SUBMIT PLS</button>
        </form>
    );
}
