/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.getElementById("temples");
let templesList = [];

/* async displayTemples Function */
let displayTemples =  (templesList) => {
  
  templesList.forEach(temple => {
    let articleElement = document.createElement("article");

    let nameElement = document.
    createElement("h3");
    nameElement.textContent = temple.templeName;

    let imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    articleElement.appendChild(nameElement);
    articleElement.appendChild(imgElement);

    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
let getTemples = async () => {
  let response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  let data = await response.json();
  templesList = data;
  displayTemples(templesList);
  console.log(templesList);
};
/* reset Function */
function reset() {
  let templesElement = document.getElementById("temples");
  while (templesElement.firstChild) {
      templesElement.removeChild(templesElement.firstChild);
  };
};


/* sortBy Function */
let sortBy = (temples) => {
  reset();
  // Get the value of the HTML element with the ID of sortBy
  let filter = document.getElementById("sortBy").value;
  // Use a switch statement based on the filter
  switch (filter) {
      case "utah":
          // Filter for temples loacated in Utah
          displayTemples(temples.filter((temple) => temple.location.includes("Utah"))
          );
          break;
      case "notutah":
          // Filter for temples located outside Utah
          displayTemples(temples.filter((temple) =>
          !temple.location.includes("Utah"))
          );
          break;
      case "older":
          // Filter for temples dedicated before 1950
          displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1))
          );
          break;
      case "all":
          // Display all temples without any filter
          displayTemples(temples);
          break;
  };
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templesList)});

getTemples();