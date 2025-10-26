// useCallback = Memoizes a function, preventing unnecessary re-creations.

// useMemo = Memoizes a computed value to avoid recalculations.

// React.memo =  React.memo prevents re-rendering of the whole component
//  useMemo memoizes a value inside a component.

// =context API={  Useful for managing global state across multiple components, avoiding prop drilling.
// -provider = Wraps the components and provides the context value.
// -consumer  (Legacy) = Used in class components or older versions of React to consume context values.
// -useContext = A hook to access context in functional components directly, replacing Consumer.
//             }

// =useReducer={ Best for complex state management involving multiple sub-values or when you need more control over the state transitions.
// -dispatch = The function that triggers the state update based on actions.
// automatic batching = save the all data  by the end of the action
//  useState =  Best for simple, straightforward state management.
// -payload  = Used to pass additional data along with the action to the reducer.
//              }

// React.lazy: Enables code-splitting for better performance by lazy-loading components.

// Clean-up functions: Used in useEffect or event listeners to clean resources when a component unmounts.

// =Lazy Loading ={  Delays loading of components until they are needed, improving performance.
// -fallback ui =  Placeholder UI shown while the lazy-loaded component is being fetched or rendered.
// -suspense  = A React component used to wrap around lazy-loaded components and manage their loading state
// }

// webpack ={
// -tree shaking       = Removes unused code, optimizing the final bundle size
// -module bundler     =  Combines multiple files into a single or smaller set of files (bundles) for better performance
// -hot module replacement = Updates code in the browser without a full reload, preserving application state during development
// }

// axios cancel token     = Axios provides a way to cancel requests via the CancelToken. It allows you to cancel a request when it's no longer needed or if the component unmounts before the request completes
// axios interceptor      = Axios interceptors allow you to run code or manipulate requests or responses globally before they are handled. Common use cases include adding authentication tokens or logging
// transpiler vs compiler =

// useimperative handle = A React Hook that customizes the instance value exposed to parent components when using ref. It’s typically used with forwardRef to control what is exposed when accessing a component’s ref.
// concurrent mode   = A set of new features in React (still experimental) that help make React apps more responsive by rendering trees without blocking the main thread. It allows React to interrupt rendering to update high-priority tasks.
// automatic batching  = React 18 introduced automatic batching, where multiple state updates triggered in a single synchronous event (e.g., a click event) are batched together into a single render for improved performance.
// custom hooks = A custom hook is a reusable function in React that starts with "use" and can call other hooks inside. It abstracts and shares logic across multiple components.
// custom higher order component = that takes a component and returns a new component, often enhancing the original component with additional behavior or data.
// React strictmode = identify potential problems in an application.
// npm package.json
// npx
// Internalisation = The process of designing software to be adaptable to different languages, regions, and cultural norms. This is often done using libraries like react-intl or i18next
// shouldcomponentupdate
// debouncing      = A technique to limit the rate at which a function is executed. It ensures that a function is called after a specified delay following the last invocation.
// eslint          = A linting tool for identifying and fixing problems in JavaScript/TypeScript code. It helps maintain code quality by enforcing coding standards and best practices.
// -how to update value in context
// -benefits/purpose  of custom hooks

// -create a list of countries and apply search on it
// -create a signup form and validate
// -difference between useMamo and react.mamo

// Prop drilling  =  Passing data through multiple nested components, which can lead to complex code. The Context API can help avoid this.
// custom hooks   = Extract reusable logic and share it between components. Keeps components clean and focused on UI.
// ⁠portals                   =  Render a component outside its parent hierarchy in the DOM. Useful for modals, tooltips, etc.

// {
// hirring process

// hr side
// student side,appling side (companies)

// ceo side
// }
// {
// laundry
// }