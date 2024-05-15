---
sidebar_position: 1
---

## useCallback Hook
<br/>
### Usage
#### 1. Skipping re-rendering of components
Explain it with more context.

In React, components can re-render. Re-rendering means the component's UI is updated based on changes on state or props. When a component re-renders, its function, including event handlers and other callbacks, are recreated.


```js
// ParentComponent.jsx
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const onClickHandler = useCallback(() => {
    console.log('Button Clicked!', count);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={onClickHandler} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
```

In the example:

1. The `onClickHandler` function in the `ParentComponent` is created using `useCallback`. It takes into consideration the `count` state as a dependency.
2. The `ChildComponent` receives this memorized function (`onClickHandler`) as a prop.
   
Now we can understand the behavior "between re-renders":

- if `onClickHandler` was not memorized with `useCallback`, every time `ParentComponent` re-renders, a new function would be created, and the `onClick` prop passed to `ChildComponent` would change.
- By using `useCallback` with `[count]` as dependencies, React ensures that the `onClickHandler` function only changes when `count` changes. This is beneficial because, even if `ParentComponent` re-renders for other reasons(like updating unrelated state), the `onClick` prop passed to `ChildComponent` won't change unless `count` changes.
  

This stability in function references can be important in scenarios where you want to optimize performance, especially in the context of avoiding unnecessary re-renders in child components.


## useContext Hook

`useContent` hook provides a way to pass data through the component tree without having to pass props down manually at every level. This can be especially for sharing state or functionality between components that are deeply nested in the component tree.

key concepts:

1. **Context:**
   - Context is a way to share values like themes, authentication status, or any other global state between components without explicitly passing them through props.
   - Context is created using `React.createContext()`, which returns an object with a ` Provider` and a `Consumer`.
2. **Provider**:
   - The `Provider` component is used to wrap a part of the component tree and "provide" the context value to all its descendants.
   - It takes a `value` prop, which is the value that eill be shared with components beneath it.
3. **Consumer**:
   - Before the introduction of hooks, we would use the Consumer component to access the context within a class component. It uses a render prop pattern.
  
Now, let's introduce the `useContext` hook:

**useContext Hook:**
- With the introduction of hooks, specifically useContext, accessing the context value has become more straightforward.
- `useContext` is a hook that takes a context object (the result of `React.createContext())` as its argument and returns the current context value for that context.

```js
// 1. Create a context
const MyContext = React.createContext();

// 2. Create a component that provides the context value
const MyProvider = ({ children }) => {
  const sharedValue = "Hello from Context!";
  return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
};

// 3. Use the context value in a child component with useContext
const MyComponent = () => {
  const contextValue = useContext(MyContext);
  return <p>{contextValue}</p>;
};

// 4. Wrap the component tree with the provider
const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

```