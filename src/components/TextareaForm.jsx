import React from "react";

export default function TextareaForm({ id, text, placeholder }) {
    return (
        <div className="creator">
            <label htmlFor={id} className="formLabel">
                {text}
            </label>
            <textarea
                id={id}
                className="textarea"
                name={id}
                placeholder={placeholder}
                type="text"
                required
            />
        </div>
    );
}
