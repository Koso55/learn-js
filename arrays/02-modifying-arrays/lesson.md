# 2. Modifying Arrays

Unlike primitive values, arrays are **mutable** — you can change their
contents without creating a new array or a new variable.

## Changing an item by index

Assign directly to an index, just like you assign to a variable:

```js
const scores = [10, 20, 30];
scores[1] = 99;
console.log(scores); // [10, 99, 30]
```

Note this works even with `const`, because you're not reassigning the
`scores` variable itself — only changing what's *inside* the array.

## Adding to the end: `push`

```js
scores.push(40);
console.log(scores); // [10, 99, 30, 40]
```

## Removing from the end: `pop`

`pop` removes the last item **and returns it**.

```js
const removed = scores.pop();
console.log(removed); // 40
console.log(scores);  // [10, 99, 30]
```

## Adding to the front: `unshift`

```js
scores.unshift(1);
console.log(scores); // [1, 10, 99, 30]
```

## Removing from the front: `shift`

`shift` removes the first item **and returns it**.

```js
const firstRemoved = scores.shift();
console.log(firstRemoved); // 1
console.log(scores);       // [10, 99, 30]
```

---

Run `node example.js` in this folder to see all of this in action, then open
`exercise.js` and fill in the `TODO`s.
