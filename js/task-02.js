const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector(`#ingredients`);

const items = ingredients.map(ingredient => {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = ingredient;
  return li;
});
console.log(items);
ul.append(...items);


