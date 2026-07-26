# 6. Sorting & Combining Arrays

## `.sort()` has a gotcha

By default, `.sort()` converts everything to strings and sorts
alphabetically — even for numbers!

```js
const numbers = [10, 1, 2];
console.log(numbers.sort()); // [1, 10, 2]  <- wrong for numbers!
```

To sort numbers correctly, pass a **compare function**:

```js
const ascending = [10, 1, 2].sort((a, b) => a - b);
console.log(ascending); // [1, 2, 10]

const descending = [10, 1, 2].sort((a, b) => b - a);
console.log(descending); // [10, 2, 1]
```

How the compare function works: for two items `a` and `b`,
- a negative result means `a` comes first
- a positive result means `b` comes first
- `0` means keep their order

`.sort()` also **mutates the original array**. If you want to keep the
original untouched, sort a copy instead — `.slice()` with no arguments
copies the whole array:

```js
const original = [3, 1, 2];
const sorted = original.slice().sort((a, b) => a - b);
console.log(sorted);   // [1, 2, 3]
console.log(original); // [3, 1, 2]  <- unchanged
```

## `.reverse()`

Reverses the order in place. Combine with `.slice()` the same way to avoid
mutating the original.

```js
const reversed = [1, 2, 3].slice().reverse();
console.log(reversed); // [3, 2, 1]
```

## `.slice(start, end)`

Copies a portion of an array into a new array, from `start` up to (but not
including) `end`. Never mutates.

```js
const letters = ["a", "b", "c", "d"];
console.log(letters.slice(0, 2)); // ["a", "b"]
```

## `.join(separator)`

Turns an array into a string, placing `separator` between items.

```js
console.log(["a", "b", "c"].join(", ")); // "a, b, c"
```

---

Run `node example.js` in this folder to see all of this in action, then open
`exercise.js` and fill in the `TODO`s.
