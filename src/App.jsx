import { useState } from "react";
import TestComponent from "./components/TestComponent";
import SubmitForm from "./components/SubmitForm";

export default function App() {
    const [recipeNames, setRecipeNames] = useState([]);

    const handleFormSubmit = (submittedText) => {
        setRecipeNames((prevRecipeNames) => [
            ...prevRecipeNames,
            submittedText,
        ]);
    };

    return (
        <>
            <h1>FOOD RECIPES 🍝</h1>

            <SubmitForm onFormSubmit={handleFormSubmit} />
            {recipeNames.map((name, index) => {
                return <TestComponent key={index} recipeName={name} />;
            })}
        </>
    );
}

const SAMPLE_RECIPES = [
    {
        id: 1,
        name: "svickova s knedlikem",
        time: "2 hodiny",
        procedure: "Vezmete knedlik, dejte ho k masu a polijte svickovou",
        items: ["1 knedlik", "1 maso", "1 svickova"],
    },
    {
        id: 2,
        name: "vajecna omeleta",
        time: "15 minut",
        procedure:
            "na panvi rozehrejte maslo, vyklepnete vajicka, pockejte, az omeleta ztuhne. Nasledne...",
        items: ["2 vajca", "2 tousty", "50g masla", "2 platky sunky"],
    },
    {
        id: 3,
        name: "nejakej paradni blivajz",
        time: "3 min 15 sek",
        procedure:
            "Silene slozity recept, ktery bude hotovy za 3 minuty a 15 sekund",
        items: ["par nejakych", "surovin", "co se daji", "pouzit"],
    },
];

const SORTED_SAMPLES = SAMPLE_RECIPES.sort((a, b) =>
    a.name.localeCompare(b.name)
); // 'a.name' is by 'localeCompare' compared with 'b.name'
