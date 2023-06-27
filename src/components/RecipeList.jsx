import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes }) {
  return (
    <div>
        {recipes.map(recipe => {
            return <Recipe recipe={recipe} key={recipe} />;
        })}
    </div>
  )
}
