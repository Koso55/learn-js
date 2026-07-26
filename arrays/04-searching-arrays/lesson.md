# 4. Searching Arrays

These methods answer "is this in the array?" and "where/what is it?" without
you writing a loop yourself.

## `.includes()` — is the value in here at all?

Returns `true` or `false`.

```js
const fruits = ["apple", "banana", "cherry"];

fruits.includes("banana"); // true
fruits.includes("mango");  // false
```

## `.indexOf()` — where is the value?

Returns the index of the first match, or `-1` if it's not found.

```js
fruits.indexOf("cherry"); // 2
fruits.indexOf("mango");  // -1
```

## `.find()` — the first value matching a condition

`.includes()` and `.indexOf()` only check for an exact value. `.find()` lets
you search using a condition instead, written as a small callback function
(see the aside in lesson 3 about `(item) => ...`):

```js
const numbers = [1, 3, 4, 7, 8];

const firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven); // 4
```

If nothing matches, `.find()` returns `undefined`:

```js
const noneOver100 = numbers.find((n) => n > 100);
console.log(noneOver100); // undefined
```

---

Run `node example.js` in this folder to see all of this in action, then open
`exercise.js` and fill in the `TODO`s.
