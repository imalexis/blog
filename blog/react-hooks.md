---
slug: react-hooks
title: Built-in React Hooks 
tags: [react, hook]
---

<!--Truncate-->
## State Hooks

- useState: declares a state variable tthat we can update directly.
- useReducer: declares a state variable with the update logic inside a reducer function.

## Context Hooks
Context lets a component receive information from distant parents without passing it as props. 

- useContext: reads and subscribes to a content.

## Ref Hooks
Refs let a component hold soe information that isn't used for rendering, like a DOM node or timeout ID. Refs are an "escape hatch" from the react paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

- useRef: declares a ref. We can hold any value in it, but most often it's used to hold a DOM node.

## Effect Hooks
Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animationm widgets written using a different UI library, and other non-React code.

Effects are an “escape hatch” from the React paradigm. Don’t use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.

- useEffect: connects a component to an external system.
- useLayoutEffect: fires before the browser repaints the screen. 
- useInsertionEffect: fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.

## Performance Hooks
A common way to optimize re-renderinng performance is to skip uneccessary work.

- useMemo: lets you cache the result of an expensive calculation.
- useCallback: lets you cache a function definition before passing it down to an optimized component.
- useTransition: lets you mark a state transition as non-blocking and allow other updates to interrupt it.
- useDeferredValue: lets you defer updating a non-critical part of the UI and let parts update first.

## Resource Hooks
Resources can be accessed by a component without having them as a part of their state.
- use: lets you read the value of a resource like a Promise or context.

## Other Hooks
Commonly useful to library authors.
- useDefaultValue
- useId
- useSyncExternalStore