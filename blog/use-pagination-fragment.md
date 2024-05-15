---
title: usePaginationFragment
slug: use-pagination-fragment
tags: [Relay, GraphQL]
hide_table_of_contents: false
---
usePaginationFragment is a hook provided by Relay, a JavaScriptframework for building data-driven React applications with GraphQL.

This hook is specially designed for working with paginated data. 

## What is a Pagination Fragment
A pagination fragment in Relay is a way to define a part of a GraphQL query that deals with a list of items taht can be paginated.
This means it you can fetch a subset of items initially and then load more items as needs(e.g., when a  user scroll to the bottom of a list)


## Arguments
- fragment
- fragmentReference(fragmentKey)

## Return Value
- data
- isLoadingNext
- isLoadingPrevious
- hasNext
- hasPrevious
- loadNext
- loadPrevious
- refetch

## To make "usePaginationFragment" work
1. Fragment Definition: Start by defining a GraphQL fragment on the type that represents your list of items. This fragment includes fields you want to fetch for each item and a connection for pagination.
   
2. Hook Usage: Use the "usePaginationFragment" hook. This hook takes 2 arguments:
   - The FraphQL fragment you define. (fragment)
   - The data from the parent query or fragment that contains the connection(fragmentKey).
         The fragment reference(fragmentKey) is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from.

         The type of the fragment reference can be imported from the generated Flow types, from the file `fragment_name`.graphql.js , and can be used to declare the type of your Props. The name of the fragment reference type will be: `fragment_name`$key.

3. Fetching More Data: The hook provides methods to fetch more items (e.g., loadNext, loadNext). When you call these methods, Relay will automatically make a GraphQL query to fetch the next or previous set of items.

4. Handling Data and State: The hook also provides the current data and state of the pagination(e.g., hasNext, isLoadingPrevious, isLoadingNext)