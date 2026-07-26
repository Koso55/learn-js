# 1. Creating Arrays & Accessing Elements

An **array** is an ordered list of values stored in a single variable. You
create one with square brackets `[]`, separating each value with a comma.

```js
const fruits = ["apple", "banana", "cherry"];
```

## Indexes

Each value has a position called an **index**. Indexes start counting at
**0**, not 1.

```js
fruits[0]; // "apple"
fruits[1]; // "banana"
fruits[2]; // "cherry"
```

## `.length`

Every array has a `.length` property that tells you how many items it holds.

```js
fruits.length; // 3
```

Because indexes start at 0, the index of the *last* item is always
`length - 1`:

```js
fruits[fruits.length - 1]; // "cherry"
```

## Missing indexes

Accessing an index that doesn't exist gives you `undefined` instead of an
error:

```js
fruits[10]; // undefined
```

## Mixed types

Arrays can hold any type of value, and even mix them:

```js
const mixed = [1, "two", true];
```

---

Run `node example.js` in this folder to see all of this in action, then open
`exercise.js` and fill in the `TODO`s.
