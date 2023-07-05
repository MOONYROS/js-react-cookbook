import { useState } from "react";
import TestComponent from "./components/TestComponent";
import SubmitForm from "./components/SubmitForm";

export default function App() {
    const [recipes, setRecipes] = useState([]);

    const handleDelete = (index) => {
        setRecipes((prevRecipes) => {
            const updatedRecipes = [...prevRecipes];
            updatedRecipes.splice(index, 1);
            return updatedRecipes;
        });
    };

    const handleFormSubmit = (submittedText, submittedDescription) => {
        const newRecipe = {
            name: submittedText,
            description: submittedDescription,
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
                        onDelete={() => handleDelete(index)}
                    />
                );
            })}
        </>
    );
}

// const SORTED_SAMPLES = SAMPLE_RECIPES.sort((a, b) =>
//     a.name.localeCompare(b.name)
// ); // 'a.name' is by 'localeCompare' compared with 'b.name'
