import React from "react";
import ReactDOM from "react-dom/client";
// Importing the Provider component from react-redux to connect the Redux store with React
import { Provider } from "react-redux";
// Importing the Redux store from the Store file
import store from "./Components/Store";
// Importing global CSS for styling the app
import "./index.css";
// Importing the main App component of the application
import App from "./App";

// Creating the root element for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* The Provider component makes the Redux store available to the entire app */}
    <Provider store={store}>
      {/* Rendering the App component inside the Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
 