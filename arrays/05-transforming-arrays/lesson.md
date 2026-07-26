# 5. Transforming Arrays: `map` and `filter`

Both `.map()` and `.filter()` return a **brand new array** — they never
change the original.

## `.map()` — turn every item into something else

Same length in and out. You give it a callback describing how to transform
one item; it applies that to all of them.

```js
const numbers = [1, 2, 3];

const squares = numbers.map((n) => n * n);
console.log(squares);  // [1, 4, 9]
console.log(numbers);  // [1, 2, 3]  <- unchanged
```

## `.filter()` — keep only some items

The callback returns `true`/`false` for each item. Only items where it
returned `true` make it into the new array — so the result can be shorter
(or empty).

```js
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);   // [2]
console.log(numbers); // [1, 2, 3]  <- unchanged
```

## Chaining them

Because both return arrays, you can call one right after the other:

```js
const evenSquares = numbers
  .filter((n) => n % 2 === 0) // [2]
  .map((n) => n * n);         // [4]

console.log(evenSquares); // [4]
```

---

Run `node example.js` in this folder to see all of this in action, then open
`exercise.js` and fill in the `TODO`s.
