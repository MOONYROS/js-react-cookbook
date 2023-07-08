import { useState } from "react";
import Recipe from "./Recipe";
import SubmitForm from "./RecipeCreator";

export default function MainRecipes() {
    const [recipes, setRecipes] = useState([]);

    const handleDelete = (name) => {
        setRecipes((prevRecipes) => {
            const updatedRecipes = prevRecipes.filter(
                (recipe) => recipe.name !== name
            );
            return updatedRecipes;
        });
    };

    const handleFormSubmit = (
        submittedText,
        submittedDescription,
        submittedIngredients,
        submittedProcedure
    ) => {
        const newRecipe = {
            name: submittedText,
            description: submittedDescription,
            ingredients: submittedIngredients.split(", "),
            procedure: submittedProcedure,
        };
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    const sortedRecipes = [...recipes].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const handleRecipeUpdate = (updatedRecipe) => {
        setRecipes((prevRecipes) => {
            const updatedRecipes = prevRecipes.map((recipe) =>
                recipe.name === updatedRecipe.recipeName // BEFORE: recipe.recipeName === updatedRecipe.recipeName ? updatedRecipe : recipe
                    ? updatedRecipe
                    : recipe
            );
            return updatedRecipes;
        });
    };

    return (
        <>
            <SubmitForm onFormSubmit={handleFormSubmit} />
            {sortedRecipes.map((recipe, index) => {
                return (
                    <Recipe
                        key={index}
                        recipeName={recipe.name}
                        description={recipe.description}
                        ingredients={recipe.ingredients}
                        procedure={recipe.procedure}
                        onDelete={() => handleDelete(recipe.name)}
                        onUpdate={handleRecipeUpdate}
                    />
                );
            })}
        </>
    );
}
