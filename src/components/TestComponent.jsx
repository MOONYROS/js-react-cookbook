import React from "react";

export default function TestComponent({ recipeName, description }) {
    return (
        <>
            <h3>{recipeName}</h3>
            <p>{description}</p>
        </>
    );
}
