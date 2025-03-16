// Import React and hooks for state and side effects
import React, { useState, useEffect } from "react";
// Import NavLink for navigation with active state styling
import { NavLink } from "react-router-dom";
// Import the CSS file for styling the header
import "./Header.css";
// Import Material-UI icons for the logo, search, home, and favorites
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Define the Header component
const Header = () => {
  // State to track the user's search input
  const [searchTerm, setSearchTerm] = useState("");
  // State to store the list of recipes fetched from recipes.json
  const [recipes, setRecipes] = useState([]);
  // State to hold the result of the search (found recipe or error message)
  const [searchResult, setSearchResult] = useState(null);

  // useEffect hook to fetch recipes when the component mounts
  useEffect(() => {
    // Fetch the recipes.json file from the public folder
    fetch("/recipes.json")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setRecipes(data)) // Store the data in the recipes state
      .catch((error) => console.error("Error fetching recipes:", error)); // Log any errors
  }, []); // Empty dependency array means this runs once on mount

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    const value = e.target.value; // Get the current value of the input
    setSearchTerm(value); // Update the searchTerm state with the input value

    // If the input is empty or just whitespace, clear the search result and exit
    if (value.trim() === "") {
      setSearchResult(null);
      return;
    }

    // Search for a recipe whose title contains the search term (case-insensitive)
    const matchedRecipe = recipes.find((recipe) =>
      recipe.title.toLowerCase().includes(value.toLowerCase())
    );

    // If a matching recipe is found, update searchResult with the recipe details
    if (matchedRecipe) {
      setSearchResult({ found: true, recipe: matchedRecipe });
    } else {
      // If no match is found, set an error message in searchResult
      setSearchResult({ found: false, message: `${value} recipe is not available` });
    }
  };

  // Render the header component
  return (
    // Outer header element for semantic HTML
    <header>
      {/* Navigation bar containing logo, search, and icons */}
      <nav>
        {/* Section for the logo (Foodify with an icon) */}
        <div className="logo-area">
          {/* Logo text with an icon */}
          <h1 className="logo-text">
            {/* Span for the restaurant icon */}
            <span>
              <RestaurantIcon />
            </span>
            Foodify {/* Text part of the logo */}
          </h1>
        </div>

        {/* Section for the search bar and its functionality */}
        <div className="search-area">
          {/* Tooltip wrapper for the search icon */}
          <div className="tooltip">
            {/* Span for the search icon */}
            <span>
              <SearchIcon />
            </span>
            {/* Tooltip text that appears on hover */}
            <span className="tooltip-text">Search</span>
          </div>
          {/* Input field for searching recipes */}
          <input
            type="text" // Standard text input
            placeholder="Search" // Placeholder text when input is empty
            value={searchTerm} // Controlled input tied to searchTerm state
            onChange={handleSearchChange} // Call handleSearchChange on input change
          />
          {/* Conditional rendering of search feedback */}
          {searchResult && (
            <div className="search-feedback">
              {/* If a recipe is found, show a link to its page */}
              {searchResult.found ? (
                <NavLink to={`/recipe/${searchResult.recipe.id}`}>
                  Found: {searchResult.recipe.title} {/* Display the found recipe title */}
                </NavLink>
              ) : (
                // If no recipe is found, show an error message
                <p>{searchResult.message}</p>
              )}
            </div>
          )}
        </div>

        {/* Section for navigation icons (Home and Favourites) */}
        <div className="navbar-icons">
          {/* Home navigation link with tooltip */}
          <div className="tooltip">
            {/* NavLink for navigating to the homepage */}
            <NavLink activeClassName="active" to="/homepage">
              {/* Span for the Home icon */}
              <span className="icon">
                <HomeIcon />
              </span>
              {/* Span for the "Home" text, hidden on smaller screens */}
              <span className="text">Home</span>
              {/* Tooltip text that appears on hover */}
              <span className="tooltip-text">Homepage</span>
            </NavLink>
          </div>

          {/* Favourites navigation link with tooltip */}
          <div className="tooltip">
            {/* NavLink for navigating to the favourites page */}
            <NavLink activeClassName="active" to="/favourites">
              {/* Span for the Favorite icon */}
              <span className="icon">
                <FavoriteIcon />
              </span>
              {/* Span for the "Favourites" text, hidden on smaller screens */}
              <span className="text">Favourites</span>
              {/* Tooltip text that appears on hover */}
              <span className="tooltip-text">Favourites</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Export the Header component for use in other parts of the app
export default Header;