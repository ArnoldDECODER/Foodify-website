// Import React for building the component
import React from "react";
// Import hooks from Redux to access state and dispatch actions
import { useSelector, useDispatch } from "react-redux";
// Import the action to remove an item from the favourites list
import { removeFavouriteItem } from "./favouritesSlice";
// Import the FavoriteIcon from Material-UI for the remove button
import FavoriteIcon from "@mui/icons-material/Favorite";
// Import the CSS file for styling the favourites page
import "./Favourite.css";
// Import Link from React Router for navigation to recipe details
import { Link } from "react-router-dom";

// Define the Favourites component to display the user's favourite recipes
const Favourites = () => {
  // Use useSelector to get the favouriteItems array from the Redux store
  const favouriteItems = useSelector((state) => state.favouritelist.favouriteItems);
  // Use useDispatch to get the dispatch function for sending actions to Redux
  const dispatch = useDispatch();

  // Render the favourites page
  return (
    // Outer container for the favourites list with styling from CSS
    <div className="favourites-container">
      {/* Heading for the favourites list */}
      <h1>Favourites List</h1>
      {/* Grid container for displaying favourite recipe cards */}
      <div className="favourites-grid">
        {/* Conditional rendering based on whether there are favourite items */}
        {favouriteItems.length === 0 ? (
          // Message shown if no recipes are in the favourites list
          <p>No favourite recipes yet!</p>
        ) : (
          // Map over favouriteItems to create a card for each recipe
          favouriteItems.map((recipe) => (
            // Individual recipe card with a unique key for React's list rendering
            <div key={recipe.id} className="favourite-recipe">
              {/* Display the recipe image with alt text for accessibility */}
              <img src={recipe.image} alt={recipe.title} />
              {/* Recipe title displayed as a heading */}
              <h3>{recipe.title}</h3>
              {/* Link to navigate to the detailed recipe page */}
              <Link to={`/recipe/${recipe.id}`}>
                {/* Button to view the full recipe */}
                <button>View Recipe</button>
              </Link>
              {/* Button to remove the recipe from favourites */}
              <button onClick={() => dispatch(removeFavouriteItem(recipe.id))}>
                {/* Favorite icon styled black, clicked to remove the recipe */}
                <FavoriteIcon style={{ color: "black" }} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Export the Favourites component for use in other parts of the app
export default Favourites;