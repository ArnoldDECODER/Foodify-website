// Import React and hooks for state and side effects
import React, { useState, useEffect } from "react";
// Import useParams from React Router to access URL parameters
import { useParams } from "react-router-dom";
// Import CSS for styling the recipe card
import "./RecipeCard.css";

// Define the RecipeCard component to display details of a single recipe
const RecipeCard = () => {
  // Extract the 'id' parameter from the URL (e.g., /recipe/2 -> id = "2")
  const { id } = useParams();
  // State to store the selected recipe, initialized as null until fetched
  const [recipe, setRecipe] = useState(null);

  // useEffect hook to fetch recipes and find the one matching the URL id
  useEffect(() => {
    // Fetch the recipes.json file from the public folder
    fetch("/recipes.json")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        // Find the recipe in the data array whose id matches the URL id (converted to integer)
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe); // Store the matching recipe in state
      })
      .catch((error) => console.error("Error fetching recipes:", error)); // Log any errors
  }, [id]); // Dependency array includes 'id' so it re-runs if the URL id changes

  // Show a loading message if the recipe hasn’t been fetched yet
  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  // Render the recipe card once the recipe data is available
  return (
    // Container for the recipe card with styling from RecipeCard.css
    <div className="recipe-card">
      {/* Display the recipe title as a heading */}
      <h1>{recipe.title}</h1>
      {/* Display the recipe image, adding a leading slash to the path if it’s missing */}
      <img src={recipe.image.startsWith("/") ? recipe.image : `/${recipe.image}`} alt={recipe.title} />
      {/* Heading for the ingredients section */}
      <h2>Ingredients:</h2>
      {/* Unordered list for ingredients */}
      <ul>
        {/* Map over the ingredients array to create a list item for each */}
        {recipe.ingredients.map((ingredient, index) => (
          // List item for each ingredient, using index as a key (not ideal if order changes)
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {/* Heading for the steps section */}
      <h2>Steps:</h2>
      {/* Ordered list for steps */}
      <ol>
        {/* Map over the steps array to create a list item for each */}
        {recipe.steps.map((step, index) => (
          // List item for each step, using index as a key (not ideal if order changes)
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

// Export the RecipeCard component for use in the app (e.g., routed via /recipe/:id)
export default RecipeCard;