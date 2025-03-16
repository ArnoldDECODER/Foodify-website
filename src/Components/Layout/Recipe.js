// Import React and hooks for managing state and side effects
import React, { useState, useEffect } from 'react';
// Import axios for making HTTP requests to fetch data
import axios from 'axios';

// Define the Recipe component to display a list of recipes
const Recipe = () => {
  // State to store the array of recipes fetched from recipes.json
  const [recipes, setRecipes] = useState([]);

  // useEffect hook to fetch recipes when the component mounts
  useEffect(() => {
    // Use axios to make a GET request to recipes.json in the public folder
    axios.get('/recipes.json')
      .then(response => {
        setRecipes(response.data); // Store all recipes from the response in state
      })
      .catch(error => console.error("Error fetching the recipe data:", error)); // Log any errors if the fetch fails
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Show a loading message if recipes haven't been fetched yet
  if (recipes.length === 0) return <p>Loading...</p>;

  // Render the list of recipes once data is available
  return (
    // Outer div to contain all recipe cards
    <div>
      {/* Map over the recipes array to create a card for each recipe */}
      {recipes.map((recipe) => (
        // Div for each individual recipe, with a unique key for React's list rendering
        <div key={recipe.id} className='recipe'>
          {/* Display the recipe image with an alt text for accessibility */}
          <img src={recipe.image} alt={recipe.title} />
          {/* Container for recipe details (title, ingredients, steps) */}
          <div className='recipeInfo'> 
            {/* Recipe title displayed as a heading */}
            <h2>{recipe.title}</h2>
            
            {/* Section for listing ingredients */}
            <h3>Ingredients</h3>
            {/* Unordered list to display each ingredient */}
            <ul>
              {/* Map over the ingredients array for this recipe */}
              {recipe.ingredients.map((ingredient, index) => (
                // List item for each ingredient, using index as a key (not ideal if order changes)
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* Section for listing cooking steps */}
            <h3>Cooking Steps</h3>
            {/* Unordered list to display each step */}
            <ul>
              {/* Map over the steps array for this recipe */}
              {recipe.steps.map((step, index) => (
                // List item for each step, using index as a key (not ideal if order changes)
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// Export the Recipe component for use in other parts of the app
export default Recipe;