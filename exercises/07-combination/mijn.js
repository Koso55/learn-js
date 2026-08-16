const guests = [
  'Adam',
  'Charlie',
  'Jane',
  'Beth',
  'Fiona',
  'Ian',
  'George',
  'Ethan',
  'Hannah',
  'Diana',
  'Kyle',
];

function sortByNameLength(guests, sortOrder) {
  if (sortOrder === 'asc') {
    return guests.sort((a, b) => a.length - b.length);
  } else {
    return guests.sort((a, b) => b.length - a.length);
  }
}

console.log(sortByNameLength(guests, 'desc'));

const guests2 = [
  'Adam',
  'Charlie',
  'Jane',
  'Beth',
  'Fiona',
  'Ian',
  'George',
  'Ethan',
  'Hannah',
  'Diana',
  'Kyle',
];

function sortAlphabetically(guests, sortOrder) {
  if (sortOrder === 'asc') {
    return guests.sort();
  } else {
    return guests.sort();
  }
}

console.log(sortAlphabetically(guests, 'desc'));
