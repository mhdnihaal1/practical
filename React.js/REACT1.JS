
//      react.js
// =====================================================


// --DOM concepts in Javascript = allowing js to manipulate the html code
// -- actual DOM                  =The real structure of a webpage; slow for frequent updates
// --  virtual DOM                =A lightweight copy used by React to optimize rendering, by calculating differences (diffing) and updating only the changed parts.
// --Multi-Page Application (MPA) = Loads a new HTML page every time you navigate (e.g., traditional websites).
// --Single Page Application (SPA)= Only one HTML page is loaded, and content is updated dynamically via JavaScript (e.g., React apps).
// --CSR (Client-Side Rendering)  = Client-Side Rendering (CSR) renders content in the browser using JavaScript.
// --SSR (Server-Side Rendering)  = whereas Server-Side Rendering (SSR) generates HTML on the server, improving SEO and initial load time.
// --Concept of reusability       = Components and functions in React are designed to be reused across the app to avoid code duplication 



// --JSX (JavaScript XML): Syntax used in React that allows you to write HTML-like code in JavaScript. JSX gets compiled into JavaScript. 
// --HTML: Markup language for structuring web content.

// --Learn about components = {
// function components,		
// class component = class sample extends react.components{render(){console.log()}},



// Controlled Components	                                      Uncontrolled Components
// ------------------------                                    -----------------------------
// Form elements are controlled via React state.	        Form elements are managed by the DOM.
// Every change is tracked using onChange.         	Values are accessed via ref only when needed.
// Allows for easy validation, manipulation, and logging.	More "hands-off," React is less involved.
// Generally more common and preferred in React apps.	Simpler for simple forms or non-critical data.
// }

// Class (basic- lifecycle methods)={
// render()
// componentDidMount      =inbuild like function = componentDidMount() it run before the page load in class
// componentWillUnMount   = same as above = componentWillUnMount () navigate to another page then it will load first in class
// componentDidUpdate()   = Runs after the component updates (re-renders). It can be used to perform actions after the update	

// componentDidMount    = Runs after the component mounts. 
// componentDidUpdate   = Runs after a component updates.
// componentWillUnmount = Runs just before the component is removed.
//  }

// ---Class Components      = Include lifecycle methods and use this for state and props.
// ---Functional Components = Simpler and can manage state with hooks like useState.

// --Dynamic rendering = React conditionally renders components based on state, props, or logic.



// state          = An object that stores data or properties of a component that can change over time.

// useState       = A React hook that lets you add state to functional components. It returns the current state and a function to update it.

// effect         = Any change or action that happens outside of rendering, like fetching data or updating the DOM.

// useEffect      = A hook that lets you run side effects after the component renders, like data fetching or updating the page title. It works asynchronously.

// useLayoutEffect= Similar to useEffect, but it runs synchronously after all DOM updates, ensuring that changes are visible before the browser paints the screen.

// useRef         = useRef is a hook that allows you to create a reference to DOM elements or store values without triggering a re-render
// useRef         = is used to directly create a reference to a DOM element or a value inside a component.

// useHistory      = A hook used in React Router (v5) to navigate programmatically through browser history.
// useNavigate     = The updated version in React Router (v6) that allows programmatic navigation.
// createContext   = Creates a context for passing data deeply through a component tree without manually passing props at each level.

// useContext      = A hook to access the value of a context created by createContext.

// useReducer      = A hook that provides an alternative to useState for managing complex state logic, similar to how reducers work in Redux.

// useCallback     = A hook that memoizes a function so that it doesn't get recreated on every render, improving performance in certain cases.

// useMemo          = A hook that memoizes the result of a calculation or function, only recalculating when its dependencies change, also for performance optimization.



// --Learn the concept of event handlers 
// onClick            = Function triggered when an element is clicked.
// onChange           = Function triggered when an input's value changes.
	

// -- React router       = A library for routing in React applications. It helps with navigation between different views or pages without reloading the browser.
// ---props (properties) =read-only  properties that are shared between components , Used to pass data from a parent component to a child component.
// ---side effect        = its is like getting data outside the component like fetching data ,directly updating the dom.
// ---hot reload         = changes able to connect with out reload .
// ---self closing tag   = <custom component /> .
// ---component naming   = upper = on babel it find as custom component and lower  = on babel it find as normal tag.


// pendings 
// -------

// Pure components       = A PureComponent will only re-render if its props or state have changed
// Union                 = Union types allow a variable to hold one of several types.
// Intersection          = Intersection types combine multiple types into one.



// phases of component = {
// Mounting  = When a component is first rendered in the DOM.
// Methods   = constructor, render, componentDidMount.
// Updating  = When the component's props or state changes.
// Methods   = shouldComponentUpdate, render, componentDidUpdate.
// Unmounting= When the component is removed from the DOM.
// Method    = componentWillUnmount.
// }

// conditional rendering   = Displaying different UI based on certain conditions 


// Fragments = Used to group multiple elements without adding extra nodes to the DOM.
// instead of <div> fragment use <>
// Div       = Adds an extra node to the DOM.

// ShadowDOM     = {
// Purpose       = It is a web standard that allows developers to encapsulate part of the DOM tree, shielding it from external styles and scripts.
// Usage         = Often used in web components to create isolated components with their own scoped CSS and JavaScript.
// Key Benefit   = Styles and functionality defined in the shadow DOM do not affect the rest of the page and vice versa.
// }

// React Fiber                = React Fiber is the new core engine behind React, designed to make rendering more efficient and break down the rendering process into smaller units for smoother updates
// Diffing                    = The algorithm React uses to determine what has changed and what needs to be updated in the actual DOM.
// Reconciliation             = The process React uses to update the DOM by comparing the new virtual DOM with the old virtual DOM.
// Create Props Proxy for HOC =  In Higher-Order Components (HOCs), a props proxy is used to modify or add new props before passing them to the wrapped component, allowing customization of its behavior.


// ---key property   = The key prop in React helps identify which items have changed, been added, or removed. It improves performance when rendering lists.(key on form)
// ---arr.reduce     = The reduce() method in JavaScript is used to reduce an array to a single value by executing a callback function for each element.
// ---what is react  = React is a JavaScript library for building user interfaces. It allows developers to create reusable components, making UI development more modular and efficient


// ---disadvantage of prop drilling = Prop drilling occurs when data is passed through many layers of components, even if intermediate components don't need the data. It makes the code harder to maintain and can cause unnecessary re-renders.
// ---dependancy array              = The dependency array in useEffect tells React when to re-run the effect. If the values in the array change, the effect will re-run.
// ---Stateful Component            = Holds and manages its own state.
// ---Stateless Component           = Doesn't manage its own state; it only receives data through props.
// ---transpiling                   =  Transpiling is the process of converting source code from one language or syntax to another


 
// ---lifting state               = Lifting state refers to moving the shared state up to the nearest common ancestor of the components that need to share data. This allows multiple child components to access and update the same state
// ---hoc                         = A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior.
// ---react cleanup fuction       = The cleanup function in useEffect is used to handle component unmounting or when the effect needs to be re-run. It helps remove event listeners, cancel timers, etc.

// ---fetch                       = fetch is used to make HTTP requests in JavaScript. It returns a promise that resolves to the response.

// ---react router                =  React Router allows you to create routes in a React app
// ---<Switch>                          = <Switch> was used in React Router v5 to render only the first route that matches the current URL. In React Router v6, it has been replaced by <Routes>
// react outlet(nested routing)         = React Outlet is used in React Router v6 for nested routing, where it renders the child routes inside the parent route.
// protected route(area access to users)= Protected routes ensure that certain pages are only accessible to authenticated users.



// ---CSR             = Client-Side Rendering (CSR) renders content in the browser using JavaScript.
// ---SSR             = whereas Server-Side Rendering (SSR) generates HTML on the server, improving SEO and initial load time.
// ---babel           = A JavaScript compiler that translates modern JS/JSX syntax into a version that browsers can understand.
// ---React.createElement= A low-level API used to create React elements, typically abstracted by JSX.
// ---StrictMode      = A development tool to highlight potential issues in React applications by activating additional checks and warnings. 
// ---Error Boundary  = A React component that catches JavaScript errors in child components, preventing the entire app from crashing.
// ---Synthetic Events= A cross-browser wrapper around the browser’s native event system in React, providing consistency across browsers.
// ---useEffect for Lifecycle = useEffect handles side effects in functional components and replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
// ---forwardRef      = A function to pass refs from parent to child components, allowing access to child component DOM nodes or React elements.
// ---Immutability of State = React's state should not be mutated directly; always return a new state object to trigger re-renders and maintain data integrity.  
// ---Passing Data from Child to Parent= This is done using callback functions passed as props, allowing the child to send data back to the parent.
// ---Spread Operator in Updating Todos= The spread operator (...) is used to create a new array that copies the old state, ensuring state immutability when updating.
// ---ESModules Import System= ESModules allow importing/exporting code between files using import and export, supporting modularity and tree-shaking in JavaScript.
// ---useRef Application     = useRef is used to access DOM elements directly, store mutable values, or persist data across renders without causing re-renders.

