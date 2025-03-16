import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
// Importing components for routing and page rendering
import Homepage from './Components/Homepage';
import Favourites from './Components/Favourites';
import Header from './Components/Layout/Header';
// import RecipeDetails from './Components/Layout/RecipeDetails'; // This route is commented out
import Recipe from './Components/Layout/Recipe';
import RecipeCard from "./Components/RecipeCard";

const App = () => {
  return (
    // The Router component is used to handle navigation between pages
    <Router>
      {/* Rendering the Header component, typically containing navigation links */}
      <Header/>
      <main>
        {/* The Routes component manages the routing for the different paths */}
        <Routes>
          {/* Defines the route for the Homepage */}
          <Route path="/homepage" element={<Homepage />} />
          {/* Defines the route for the Favourites page */}
          <Route path="/favourites" element={<Favourites />} />
          {/* This route for RecipeDetails is commented out */}
          {/* <Route path="/homepage/:id" element={<RecipeDetails />} /> */}
          {/* Defines the route for the Recipe page */}
          <Route path="/homepage/recipe" element={<Recipe />} />
          {/* Defines the route for the RecipeCard page, dynamically loaded by recipe ID */}
          <Route path="/recipe/:id" element={<RecipeCard />} /> {/* Recipe Page */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
