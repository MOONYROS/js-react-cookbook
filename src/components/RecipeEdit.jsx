import React from "react";

export default function RecipeEdit() {
    return (
        <form>
            {/* handling name */}
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name} /* on change handle name change*/
                required
            />

            {/* handling time */}
            <label htmlFor="time">Time consumption:</label>
            <input
                type="text"
                id="time"
                value={time} /* on change handle time change*/
                required
            />

            {/* handling procedure */}
            <label htmlFor="procedure">Procedure:</label>
            <textarea
                type="text"
                id="procedure"
                value={procedure} /* on change handle procedure change*/
                required
            />

            {/* handling items */}
            <label htmlFor="items">Items:</label>
            <textarea
                type="text"
                id="items"
                value={procedure} /* on change handle items change*/
                required
            />

            <button type="submit">Add Recipe</button>
        </form>
    );
}
