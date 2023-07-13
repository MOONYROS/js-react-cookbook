import React from "react";

export default function Documentation() {
    return (
        <>
            <h1>Documentation</h1>
            <div>
                <h2>About this app</h2>
                <p>
                    This application works very basically using
                    <label>arrays</label>, meaning that if you close the app and
                    start it again, you will lose all you progress and
                    everything you've done.
                </p>
            </div>
            <div>
                <h2>How to use this app</h2>
                <p>
                    The main goal of this application is to make user able to
                    create, update and remove recipes from this cookbook app.
                </p>
                <h3>How to create a recipe</h3>
                <p>
                    To create a recipe, you need to fill all the information for
                    the recipe. Which means that you need
                </p>
                <ul>
                    <li>Recipe Name</li>
                    <li>Recipe Description</li>
                    <li>Recipe Ingredients</li>
                    <li>Procedure</li>
                </ul>
                <p>
                    Please note that all the above information are required and
                    without them you won't be able to create the recipe. The
                    application will let you know which information is missing.
                </p>
                <p>
                    Also to make the ingredients to appear as a list, you need
                    to separate them with ", " otherwise it won't work.
                </p>
                <p>
                    After filling up all the information, you can click on
                    "Create Recipe" button, which will then create the recipe
                    with your filled information.
                </p>
            </div>
        </>
    );
}
