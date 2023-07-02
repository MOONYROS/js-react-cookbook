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
            <label htmlFor="inputField">TYPE SMTH</label>
            <input
                id="inputField"
                name="inputField"
                placeholder="type recipe name"
                type="text"
            />
            <button type="submit">SUBMIT PLS</button>
        </form>
    );
}
