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
            <div>
                <h2>How to edit the recipe</h2>
                <p>
                    To edit the recipe you need to click on "Edit Recipe" button
                    which will open editing areas, similar to the ones you used
                    to create the recipe. Here you can simply change
                    informations of any kind you desire.
                </p>
                <p>
                    After making all the changed, you can then click on the
                    "Save" button to change the previous data you entered.
                </p>
                <p>
                    To discard your changes, you simply click on "Cancel"
                    button.
                </p>
            </div>
            <div>
                <h2>How to delete a recipe</h2>
                <p>
                    To delete the recipe, you need to click on "Delete Recipe"
                    button. Please note that this action will delete the recipe
                    permanently and there is no way of getting it back. Also,
                    the application will not ask whether you are sure about the
                    deletion, so please, make sure you want to remove the recipe
                    on button of which you are about to click.
                </p>
            </div>
        </>
    );
}
