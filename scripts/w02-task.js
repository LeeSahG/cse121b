/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Lisakhanya Gasa";
let currentYear = 2023;
let profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("image");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = fullName;
imageElement.setAttribute("src", profilePicture);



/* Step 5 - Array */
let favoriteFoods = ["pizza", "ribs", "fried chips"];



