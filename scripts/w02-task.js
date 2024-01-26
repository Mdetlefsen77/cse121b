/* W02-Task - Profile Home Page  *Martin Detlefsen* */

/* Step 1 - Setup type tasks - no code required */

/* 
1) Download the starter files, unzip the files, and place those unzipped files and folders as given into the cse121b folder. 

2) Test the page in your local browser by using Open with Live Server on the index.html file.

3) Place an image of yourself into the images folder by dragging and dropping the image file into the images folder in VS Code or by using your operating system's file manager. The image should be at least 300 pixels in width and at least 300 pixels in height but does not need to be a square.
*/

/* Step 2 - Variables */

const FULL_NAME = "Martin Detlefsen";
const CURRENT_YEAR = new Date().getFullYear();
const PROFILE_PICTURE = 'images/yourprofileimagename.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img')
const foodElement = document.getElementById('food');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${FULL_NAME}</strong>`;
yearElement.textContent = CURRENT_YEAR;
imageElement.setAttribute('src', PROFILE_PICTURE);
imageElement.setAttribute('alt', `Profile image of [${FULL_NAME}]`);
/* Step 5 - Array */

let listOfFood = ['Pizza', 'Hamburger', 'Pasta', 'Salad', 'Sushi', 'Pancakes', 'BQB'];
let favFood = 'ASADO';
listOfFood.push(favFood);
foodElement.innerHTML += `<br>${listOfFood}`
listOfFood.shift()
foodElement.innerHTML += `<br>${listOfFood}`
listOfFood.pop()
foodElement.innerHTML += `<br>${listOfFood}`




