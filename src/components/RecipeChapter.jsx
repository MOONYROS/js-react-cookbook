import React from "react";

export default function RecipeChapter({ heading, content }) {
    return (
        <>
            <h4>{heading}</h4>
            {content}
        </>
    );
}
