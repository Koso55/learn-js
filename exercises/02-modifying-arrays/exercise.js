// Run this file with: node exercise.js
// Fill in every place marked with "TODO: your code here".
// Do not change function names or the module.exports at the bottom.

// 1) `tasks` is today's to-do list. Replace the SECOND task with
//    `newTask` (your plans changed), then return `tasks`.
function updateSecondTask(tasks, newTask) {
  // TODO: your code here
}

// 2) Add `task` to the end of `tasks` (something new came up),
//    then return `tasks`.
function addNewTask(tasks, task) {
  // TODO: your code here
}

// 3) You just finished the LAST task on `tasks`. Remove it from the list
//    and return the task you finished (not the whole list).
function finishLastTask(tasks) {
  // TODO: your code here
}

// 4) The FIRST task on `tasks` is too urgent to deal with right now —
//    move it to the end of the list instead, and return the updated list.
//    Example: ["reply to emails", "walk the dog", "do laundry"]
//          -> ["walk the dog", "do laundry", "reply to emails"]
function postponeFirstTask(tasks) {
  // TODO: your code here
}

// --- You can ignore everything below this line ---

console.log(
  "updateSecondTask(['walk the dog','buy groceries','read a book'], 'call mom'):",
  updateSecondTask(["walk the dog", "buy groceries", "read a book"], "call mom")
);
console.log(
  "addNewTask(['walk the dog','buy groceries'], 'pick up dry cleaning'):",
  addNewTask(["walk the dog", "buy groceries"], "pick up dry cleaning")
);
console.log(
  "finishLastTask(['walk the dog','buy groceries']):",
  finishLastTask(["walk the dog", "buy groceries"])
);
console.log(
  "postponeFirstTask(['reply to emails','walk the dog','do laundry']):",
  postponeFirstTask(["reply to emails", "walk the dog", "do laundry"])
);

module.exports = {
  updateSecondTask,
  addNewTask,
  finishLastTask,
  postponeFirstTask,
};
