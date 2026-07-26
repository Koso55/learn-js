# Arrays

An **array** is an ordered list of values stored in a single variable. This
folder teaches arrays through 6 topics, from basic to more advanced. Do them
in order — each one builds on the last.

| # | Topic | What you'll learn |
|---|-------|--------------------|
| 1 | [creating-arrays](01-creating-arrays) | Array literals, indexing, `.length` |
| 2 | [modifying-arrays](02-modifying-arrays) | Changing elements, `push`/`pop`/`shift`/`unshift` |
| 3 | [looping-arrays](03-looping-arrays) | `for`, `for...of`, `forEach` |
| 4 | [searching-arrays](04-searching-arrays) | `includes`, `indexOf`, `find` |
| 5 | [transforming-arrays](05-transforming-arrays) | `map`, `filter` |
| 6 | [sorting-and-combining](06-sorting-and-combining) | `sort`, `reverse`, `slice`, `join` |

## Each topic folder has 4 files

- **`lesson.md`** — a short explanation with examples. Read this first.
- **`example.js`** — the same examples from the lesson, written as runnable
  code. Run it and watch the output, then try tweaking values yourself:
  ```
  node arrays/01-creating-arrays/example.js
  ```
- **`exercise.js`** — functions for you to finish. Every spot you need to
  edit is marked:
  ```js
  // TODO: your code here
  ```
  You can run the file directly to manually check it:
  ```
  node arrays/01-creating-arrays/exercise.js
  ```
- **`exercise.test.js`** — the tests that score your `exercise.js`. Tests are
  ordered from easiest to hardest. Run just this topic's tests:
  ```
  npx jest arrays/01-creating-arrays
  ```
  Or run everything in the whole branch:
  ```
  npm test
  ```

## Working on your own branch

If you forked or cloned this repo, create your own branch first
(e.g. `you/array-basics`) so your work doesn't collide with this one. Only
edit the parts marked `// TODO: your code here` inside `exercise.js` files —
the tests are written against the rest of the file staying the same.
