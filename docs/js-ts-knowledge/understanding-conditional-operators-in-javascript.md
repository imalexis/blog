---
sidebar_position: 1
---
#  Understanding conditional operators in javascript

## Conditional (Ternary) Operator (?):
The `?` symbol is part of the conditional (ternary) operator in JavaScript. It's used for creating conditional expressions.
The syntax is `condition ? expr1 : expr2`. If the condition evaluates to true, `expr1` is executed; otherwise, `expr2` is executed.
Example:
```js
let age = 20;
let status = (age >= 18) ? 'adult' : 'minor';
console.log(status); // Output: 'adult'
```
## Nullish Coalescing Operator (??):

The `??` symbol is the nullish coalescing operator introduced in ECMAScript 2020 (ES11).
- It's used to provide a default value for a variable if the variable is `null` or `undefined`.
- It differs from the logical OR (`||`) operator in that it only checks for `null` or `undefined`, not other falsy values like `0`, `false`, `''`, etc.
- The syntax is `expr1 ?? expr2`. If `expr1` is `null` or `undefined`, it evaluates to `expr2`.
- Example:
```js
let user = {
    name: 'John',
    age: 25,
    address: null
};

let address = user.address ?? 'Unknown';
console.log(address); // Output: 'Unknown'
```
In summary, ? is used for conditional expressions, while ?? is used for providing default values for nullish variables.