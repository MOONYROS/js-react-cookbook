import React, { useState } from "react";

export default function RecipeEdit({ onRecipeCreate }) {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [procedure, setProcedure] = useState("");
    const [items, setItems] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleProcedureChange = (e) => {
        setProcedure(e.target.value);
    };

    const handleItemChange = (e) => {
        setItems(e.target.value.split(", "));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            id: Date.now(),
            name,
            time,
            procedure,
            items,
        };

        onRecipeCreate(newRecipe);
        setName("");
        setTime("");
        setProcedure("");
        setItems([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* handling name */}
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
            />

            {/* handling time */}
            <label htmlFor="time">Time consumption:</label>
            <input
                type="text"
                id="time"
                value={time}
                onChange={handleTimeChange}
                required
            />

            {/* handling procedure */}
            <label htmlFor="procedure">Procedure:</label>
            <textarea
                id="procedure"
                value={procedure}
                onChange={handleProcedureChange}
                required
            />

            {/* handling items */}
            <label htmlFor="items">Items:</label>
            <textarea
                id="items"
                value={items}
                onChange={handleItemChange}
                required
            />

            <button type="submit">Add Recipe</button>
        </form>
    );
}
