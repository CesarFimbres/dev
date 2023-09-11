// Import Redux and React-Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";

// Create a reducer for our state
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 13;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Create a store with our reducer
const store = configureStore({
  reducer: { counter: counterReducer },
});

// Wrap our App component in a Provider to make the store available to our components
const App = () => {
  return (
    <Provider store={store}>
      <MyComponent />
    </Provider>
  );
};

// Export our App component
export default App;

// Our MyComponent component
const MyComponent = () => {
  // Get the current counter value from the store
  const counter = useSelector((state) => state.counter);

  // Render the counter value
  return (
    <div>
      <p>The counter is currently {counter}.</p>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        Incremento
      </button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>
        Decremento
      </button>
    </div>
  );
};

