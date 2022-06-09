import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeList.css'

function RecipeLIst({recipes}) {
  return (
    <div className='recipe-list'>
        {recipes && recipes.map((recipe)=>(
            <div key={recipe.id} className="card">
                <h2> {recipe.title} </h2>
                <p> {recipe.cookingTime} </p>
                <div> {recipe.method.substring(0,100)}... </div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
            </div>
      ))}
    </div>
  )
}

export default RecipeLIst