import React from "react";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";

export default function SubmitForm({ onFormSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedText = e.target.nameField.value;
        const submittedDescription = e.target.descriptionField.value;
        const submittedIngredients = e.target.ingrList.value;
        const submittedProcedure = e.target.procedureField.value;
        onFormSubmit(
            submittedText,
            submittedDescription,
            submittedIngredients,
            submittedProcedure
        );
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputForm
                id={"nameField"}
                text={"Recipe Name:"}
                placeholder={"recipe name"}
            />
            <TextareaForm
                id={"descriptionField"}
                text={"Recipe Description:"}
                placeholder={"recipe description..."}
            />
            <TextareaForm
                id={"ingrList"}
                text={"Recipe Ingredients:"}
                placeholder={"ingredient 1, ingredient 2..."}
            />
            <TextareaForm
                id={"procedureField"}
                text={"Procedure:"}
                placeholder={"Type in the procedure..."}
            />
            <button type="submit">Create Recipe</button>
        </form>
    );
}
