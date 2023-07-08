import React from "react";

export default function RecipeChapter({ heading, content }) {
    return (
        <>
            <h3>{heading}</h3>
            {content}
        </>
    );
}
