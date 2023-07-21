import React from "react";

export default function InputForm({ id, text, placeholder }) {
    return (
        <div className="creator">
            <label htmlFor={id} className="formLabel">
                {text}
            </label>
            <input
                id={id}
                className="input"
                name={id}
                placeholder={placeholder}
                type="text"
                autoComplete="off"
                required
            />
        </div>
    );
}
