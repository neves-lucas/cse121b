/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: 'Lucas Neves',
  photo: 'images/selfie.jpg',
  favoriteFoods: [' Pizza', ' Hamburguer', ' Sushi', ' Lasagna', ' Pasta'],
  hobbies: [' Play Video Games', ' Watch Movies', ' Listen to Music', ' Read Books'],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  city: '🏠 São Paulo, Brazil',
  length: '2019-2021',
}, {
  city: '🏠 Maceió, Brazil',
  length: '1998-2019 | 2021-Current'
});



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);
document.querySelector('img').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.innerHTML = `<strong>${place.city}</strong>`
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});