---
slug: relay-fragment
title:  Fragments
tags: [React, Relay, GraphQl]
---

In Relay, GraphQL Fragments serve as the main building block for declaring data dependencies for React Components. Fragments in GraphQL are reusable units that define a set of fields to be queried from a GraphQL type. These fragments allow us to specify the data requirements for a particular part of our application, making queries more modular and maintainable.

<!-- truncate -->

## key Concepts

### GraphQL Fragments
- A GraphQL Fragment is a named set of fields on a GraphQL type. It is  a way to define a subset of the fields that we want to query on a particular GraphQL type.
- Fragments allow us to modularize queries and reuse them across multiple components. For example, when different components share similar data requirements.

### Data Dependencies in Relay Components

ToDo