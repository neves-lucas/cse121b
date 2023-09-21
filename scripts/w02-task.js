/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Lucas Neves Rocha';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/selfie.jpg'
const title = 'Lucas Neves Rocha | CSE 121B | BYU-Idaho';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
const titleElement = document.querySelector('title');
const foodTitle = document.querySelector('h2');
const hr = document.createElement('hr');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `Year: ${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);
titleElement.innerHTML = title;
foodTitle.after(hr);

/* Step 5 - Array */
let favoriteFoods = [];
favoriteFoods.push('Pizza');
favoriteFoods.push('Hamburguer');
favoriteFoods.push('Sushi');
favoriteFoods.push('Lasagna');
favoriteFoods.push('Pasta');
const newFood = ['Ice Cream'];
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`