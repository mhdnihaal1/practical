//                                        redux
// ====================================================================================

 

// Context: React Context is a built-in way to pass data through the component tree without having to manually pass props down at every level. It's great for simple state management, like theme settings or user data.
// Redux: Redux is a state management library that provides a predictable and centralized way to manage application state. It is better suited for more complex state management scenarios, where you need to manage global state changes, actions, and reducers.
// Redux toolkit = A modern way to use Redux that simplifies setting up the store, creating slices, and managing state. It comes with built-in utilities like createSlice, configureStore, and createAsyncThunk to make Redux easier to use and less boilerplate-heavy.
// Slice = A slice is a collection of Redux reducer logic and actions for a specific part of the application state. A slice typically includes:
// Redux middlewares = Middleware is a function that allows you to intercept and interact with actions before they reach the reducers. It is used for things like logging, crash reporting, and handling asynchronous operations.
// store = The store is the single source of truth for the Redux application state. It holds the entire state tree and provides methods like dispatch to update the state and getState to access the state.
// ===The single source of truth in a Redux application. It holds the application's state
// useStore = A hook that gives you access to the Redux store directly (less commonly used)


// Thunk       = A Redux middleware that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous logic (like API calls) before dispatching actions to update the state.
// Saga        = A middleware for managing side effects (like data fetching and other asynchronous tasks). Sagas are implemented as generator functions that yield objects to the Redux-Saga middleware for executing background tasks.
// Uselocation = A React Router hook that provides access to the current location object, which contains information about the URL, including the pathname, search query, and hash
// provider    = The Provider component is used to wrap the entire React application (or a part of it) to make the Redux store available to any nested components that need to access the state or dispatch actions.
// Provider    = A component that wraps the application, making the Redux store available to the rest of the app.

// reducer         = A function that determines how the state should change in response to an action. It takes the current state and an action as arguments and returns a new state.
// actions         = Actions are plain JavaScript objects that represent changes to the state. Each action has a type field and may contain additional data (payload) describing the change
// useSelectors()  = A Redux hook that allows you to extract data from the Redux store state. It takes a selector function as an argument, which receives the state and returns the desired piece of data.
// useSelector     = A hook that allows you to extract data from the Redux store state

// useDispatch()   = A Redux hook that provides access to the dispatch function. It allows you to send actions to the Redux store to update the state
// useDispatch     = A hook that returns a reference to the dispatch function from the Redux store.


// redux abstraction(toolkit)

// redux = It is a state  managment  system(global)

// =Why React is Different from Others:
// -React uses a component-based architecture, Virtual DOM for efficient updates, and unidirectional data flow, making it easier to manage complex UIs.
// =combineReducers: 
// -A utility that merges multiple reducer functions into a single root reducer, allowing modular state management.
// =Asynchronous Actions in Redux: 
// -Handled using middleware like redux-thunk or redux-saga to perform async tasks, such as data fetching, before dispatching actions.
// =applyMiddleware Function: 
// -A Redux function that adds middleware to the store, allowing for custom processing of actions before they reach the reducer.
// =The Use of connect: 
// -A react-redux function that connects a React component to the Redux store, mapping state and dispatch actions to props. 
// =mapDispatchToProps: 
// -A function used with connect to map dispatchable actions to the component's component as props
// =Store the Data in Redux:
// -The application state is stored in a central store managed by reducers, and components access or modify it via actions and state mappings.



// - setting up redux in React app
// - immutability of state

// q)    What are the three principles of Redux? 
// ans)  principles of redux ={
// -Single Source of Truth: One central store for the entire application's state.
// -State is Read-Only: State updates happen through dispatched actions.
// -Changes are Made with Pure Functions: State changes are handled by pure reducers.
// }
// - where is session stored.
// - HTTP 200 vs 201, 403.
// - Session vs. JWT: Sessions store authentication state server-side, while JWTs store it client-side in a stateless manner.
// - Refresh Token: Allows obtaining a new access token when the current one expires, extending the session duration.
// - HTTP-Only Cookie: A secure cookie that cannot be accessed via JavaScript, commonly used to store sensitive data.
// - SameSite Cookie: Restricts how cookies are sent with cross-site requests, providing additional security against CSRF.


// - signup input validation 
// - understand the difference between signup and signin

// - refer OpenAPI examples and learn how to design endpoints 
// - add search endpoint (currently search is client side filter)


//                     redux questions  and  answers   
// ========================================================================

// q)What is Redux and why is it used in React applications 
// ans) A state management library that helps manage application state in a predictable way

// What is the role of the Redux store? 
// The store holds the application state and provides methods to access the state, dispatch actions, and subscribe to changes. 

// What are actions in Redux?
// Actions are plain objects that represent an event or a change in the application (e.g., { type: 'ADD_TODO', payload: { text: 'Learn Redux' } }).

// What are action creators in Redux?
// Functions that create and return action objects, often used to encapsulate the action creation process.
// A pure function that takes the current state and an action, then returns a new state based on the action's type.

// What is a reducer in Redux?
// A pure function that takes the current state and an action, then returns a new state based on the action's type

// Explain how the connect function works in Redux.
// A higher-order function that connects a React component to the Redux store, allowing it to access state and dispatch actions.

// Can you describe the flow of data in a Redux application?
// -The user interacts with the UI.
// -An action is dispatched.
// -The reducer processes the action and updates the state.
// -The store notifies subscribers (components) of the state change

// What is the difference between createStore and configureStore in Redux Toolkit?
// createStore is a basic function to create a store, while configureStore (from Redux Toolkit) provides sensible defaults and middleware out of the box.

// Explain the concept of immutability in Redux and why it is important.
// Immutability means that state cannot be changed directly; instead, new state objects are created. It’s important for predictable state updates.

// What is middleware in Redux, and how does it work?
// Functions that provide a third-party extension point between dispatching an action and the moment it reaches the reducer, allowing for additional functionality like logging or async actions.

// Give an example of when you would use a middleware like redux-thunk or redux-saga.
// Use redux-thunk for handling async actions that return functions (e.g., API calls), and redux-saga for more complex async flows using generator functions.

// How do you handle asynchronous actions in Redux?
// Use middleware (like redux-thunk or redux-saga) to manage async operations by dispatching actions based on the results of the operations.

// What is a "slice" in Redux Toolkit?
// A slice is a portion of the Redux state and associated reducers/actions defined together, simplifying state management.

// How do you combine multiple reducers in Redux?
// Use combineReducers to merge multiple reducers into a single reducing function.

// What are selectors in Redux, and why are they used?
// Functions that extract specific data from the Redux state, promoting reusability and encapsulation.

// What is the purpose of useSelector and useDispatch hooks in Redux?
// useSelector retrieves data from the Redux store, while useDispatch provides a way to dispatch actions from within React components.



