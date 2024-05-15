JS reference

## Map.prototype.entries() VS Object.entries()

Object.entries()
The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.

## Methods of creating Array

### 1. By using constructor function
   Create a new `Array` object.

   `let colors = new Array();`

   when there is only a single number parameter provided, an array is created with its `length` property set to that number. 
   
   `const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"`

   Any constructor with multiple parameters, a new `Array` with the given elements is created.

### 2. By using array literal
 
   `let colors = ["red", "blue"]`

   `let values = [1,2] // [1,2] `

   `let values = [1] // [1] `

### 3. By using `Array.from()`

    The `Array.from()` static method creates a new, shallow-copied `Array` instance from an **iterable** (e.g.,Map and Set) or **array-like** (objects with a `length` property and indexed elements) object.
    ```js
    Array.from(arrayLike)
    Array.from(arrayLike, mapFn)
    Array.from(arrayLike, mapFn, thisArg)
    ```
    The `mapFn` function is called with the following arguments:

        > `element` The current element being processed in the array.   
        > `index` The index of the current element being processed in the array.
    
#### Expamples
    - Array from a String     
        ```js
        Array.from("foo");
        // [ "f", "o", "o" ]
        ```
    - Array from a Set
        ```js
        const m = new Set() .add(1)
                            .add(2)
                            .add(3)
                            .add(4);
        console.log(Array.from(m)); // [1, 2, 3, 4]
        ```

    - Array from a Map
        ```js
        const s = new Map() .set(1, 2)
                            .set(3, 4);
        console.log(Array.from(s)); // [[1, 2], [3, 4]]
        ```
    
    - Array from an array-liked  object       
        > `arguments` object
        ```js
        function getArgsArray() {
            return Array.from(arguments);
        }
        console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]
        ``` 
        > customized object
        ```js
        const arrayLikeObject = {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        };
        console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
        ```
    
    

