import React from "react";

export default function InputForm({ id, text, placeholder }) {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input
                id={id}
                name={id}
                placeholder={placeholder}
                type="text"
                required
            />
        </>
    );
}
