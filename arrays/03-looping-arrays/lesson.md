# 3. Looping Through Arrays

Instead of writing `arr[0]`, `arr[1]`, `arr[2]`... by hand, you loop.

## Classic `for` loop

Use this when you need the **index** (e.g. to compare positions, or to
also loop over a second array at the same time).

```js
const numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}
// 0 10
// 1 20
// 2 30
```

- `let i = 0` — start at the first index
- `i < numbers.length` — keep going while `i` is a valid index
- `i++` — move to the next index each time

## `for...of` loop

Use this when you just need the **values**, not the index:

```js
for (const number of numbers) {
  console.log(number);
}
// 10
// 20
// 30
```

## `.forEach()`

`forEach` is a method that also loops over every value, but as a method
call instead of a loop keyword. You give it a small function ("callback")
to run for each item:

```js
numbers.forEach((number) => {
  console.log(number);
});
```

`(number) => { ... }` is a mini function: it takes one input (`number`) and
runs the code in the braces for it, once per array item. You'll see this
same shape again with `find`, `map`, and `filter` in later lessons.

---

Run `node example.js` in this folder to see all of this in action, then open
`exercise.js` and fill in the `TODO`s.
