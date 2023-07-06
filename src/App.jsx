import { useState } from "react";
import TestComponent from "./components/TestComponent";
import SubmitForm from "./components/SubmitForm";

export default function App() {
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

    return (
        <>
            <h1>FOOD RECIPES 🍝</h1>

            <SubmitForm onFormSubmit={handleFormSubmit} />
            {sortedRecipes.map((recipe, index) => {
                return (
                    <TestComponent
                        key={index}
                        recipeName={recipe.name}
                        description={recipe.description}
                        ingredients={recipe.ingredients}
                        procedure={recipe.procedure}
                        onDelete={() => handleDelete(recipe.name)}
                    />
                );
            })}
        </>
    );
}
