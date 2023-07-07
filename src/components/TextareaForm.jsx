import React from "react";

export default function TextareaForm({ id, text, placeholder }) {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                type="text"
                required
            />
        </>
    );
}
