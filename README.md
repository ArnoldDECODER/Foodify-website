# Foodify Website

## Overview
Foodify is a web application created using React to help users explore, save, and view recipes. The app features a dynamic homepage with a carousel of trending recipes, a search bar to find specific recipes, a favourites page to manage saved recipes, and detailed recipe pages. The app uses React Router for navigation, Redux for state management (specifically for favourites), and Axios to fetch recipe data from a local `recipes.json` file. The live website is hosted on Netlify and can be accessed at [Foodify Website](https://foodify-website.netlify.app).

## Features
- **Homepage Carousel:** Displays trending recipes, showing 3 recipes at a time in fullscreen and 1 at a time on small screens. Users can navigate left and right using arrow buttons.
- **Favourites:** Add or remove recipes to/from your favourites by tapping the heart icon on the homepage or favourites page.
- **Search Bar:** Located in the header, it checks if a recipe is available. If found, clicking the result takes you to the recipe details page; if not, it displays a "recipe not available" message.
- **Recipe Details:** View recipe details including name, picture, ingredients, and steps by clicking "View Recipe" from the homepage, favourites, or search results.
- **Responsive Design:** Adapts to different screen sizes, with the navbar icons simplifying to just icons (no text) on smaller screens.
- **Persistent Favourites:** Favourites are stored in `localStorage` via Redux, so they persist across page reloads.
- **Recipe Data:** All recipe data is stored in `recipes.json` and fetched using Axios or the Fetch API.

## Getting Started

### Initial State
When you first open the website, it will appear empty, showing only the navbar at the top. To view the homepage with the recipe carousel:
- Navigate to the homepage by clicking the Homepage icon (a house icon) in the navbar.

### Using the Favourites Feature
- The favourites list starts empty.
- To add a recipe to your favourites, click the heart icon on a recipe card (on the homepage or favourites page). The heart will fill in to indicate it’s been added.
- To remove a recipe, click the heart icon again, and it will revert to an outline, removing the recipe from your favourites.
- View your saved recipes by clicking the Favourites icon (a filled heart) in the navbar.

## How It Works

### Homepage:
- The `Homepage.js` component fetches recipes from `recipes.json` and displays 3 trending recipes at a time (1 on small screens).
- Users can slide left/right using arrows and add/remove favourites by tapping the heart icon (toggles between `FavoriteBorderIcon` and `FavoriteIcon`).
- The "View Recipe" button links to `/recipe/:id`.

### Search:
- In `Header.js`, the search bar filters `recipes.json` as you type.
- If a recipe matches, it shows a clickable link to `/recipe/:id`; if not, it displays "[search term] recipe not available."

### Favourites:
- The `Favourites.js` component lists all saved recipes from Redux state.
- Users can view details (`/recipe/:id`) or remove items by tapping the heart icon.

### Recipe Details:
- `RecipeCard.js` fetches the specific recipe from `recipes.json` using the `:id` from the URL and displays its details.

## Tech Stack
- **React**: Core framework for building the UI.
- **React Router**: Handles routing between pages (homepage, favourites, recipe details).
- **Redux**: Manages the favourites list state with Redux Toolkit.
- **Axios**: Installed and used to create an API-like fetch from `recipes.json` (though some components use fetch directly).
- **Material-UI Icons**: Used for visual elements like the heart, home, and search icons.
- **CSS**: Custom styles for each component, with separate `.css` files for key components.

## File Structure and Routes

### Routes
The app uses React Router to connect different pages via the following routes:
- `/` or `/homepage`: Homepage (`Homepage.js`), displaying the carousel of trending recipes.
- `/favourites`: Favourites page (`Favourites.js`), showing all saved recipes.
- `/recipe/:id`: Recipe details page (`RecipeCard.js`), displaying a specific recipe based on its ID.

### JavaScript Files and Their CSS
- **`Header.js` (`Header.css`)**: Displays the navigation bar with a logo (Foodify), search bar, and links to homepage and favourites.
- **`Homepage.js` (`Carousel.css`, `Homepage.css`)**: Serves as the homepage, featuring a carousel of trending recipes.
- **`Favourites.js` (`Favourite.css`)**: Displays a list of favourite recipes in a grid layout.
- **`Recipe.js`**: Lists all recipes from `recipes.json` (not directly routed but used for testing or as a base).
- **`RecipeCard.js` (`RecipeCard.css`)**: Shows detailed information for a single recipe based on the `:id` URL parameter.
- **`favouritesSlice.js`**: Redux slice managing the favourites list.
- **`store.js`**: Configures the Redux store.

### Data
- **`recipes.json`**:
  - Stores all recipe data (e.g., id, title, image, ingredients, steps) in a JSON format.
  - Fetched by components like `Header.js`, `Homepage.js`, and `RecipeCard.js` using Axios or Fetch API.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arnolddecoder/Foodify-website.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd Foodify-website
   ```
3. **Install dependencies (including Axios):**
   ```bash
   npm install
   ```
4. **Run the app locally:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`.

## Additional Notes
- **CSS Files:** Each major component (`Header.js`, `Homepage.js`, `Favourites.js`, `RecipeCard.js`) has a corresponding `.css` file for custom styling.
- **Axios:** Installed and used in `Recipe.js` to fetch data, though other components use the native fetch API.
- **Responsive Design:** The carousel and navbar adapt to screen size, with simplified icons on smaller screens.

## Future Improvements
- **Autoload Homepage:** Currently, the homepage does not load automatically when opening the website via the Netlify link. Future updates could ensure automatic loading.
- **Firebase Integration and Login Page:** Storing recipe data in Firebase and adding a login page would allow users to have separate accounts, with their own favourites and preferences saved.
- **Improved Responsiveness:** Future updates could focus on ensuring content is fully accessible and layouts adapt seamlessly.

## Live Demo
Check out the live website at: [Foodify Website](https://foodify-website.netlify.app).

