// Import configureStore from Redux Toolkit to set up the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Import the favourites slice reducer to manage the favourites state
import favouriteSlice from "./favouritesSlice"; // Import your reducer

// Create and configure the Redux store
export const store = configureStore({
  // Define the reducers that will manage different parts of the state
  reducer: {
    // Assign the favouriteSlice reducer to the 'favouritelist' key in the state
    favouritelist: favouriteSlice, // Add your reducer to manage favourites
  },
});

// Export the configured store as the default export for use in the app
export default store;