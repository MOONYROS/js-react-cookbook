import React from "react";

export default function TestComponent({ recipeName, description, onDelete }) {
    const handleDeleteClick = () => {
        onDelete();
    };

    return (
        <>
            <h3>{recipeName}</h3>
            <p>{description}</p>
            <button type="button" onClick={handleDeleteClick}>
                Delete Recipe
            </button>
        </>
    );
}
