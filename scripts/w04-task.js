/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProject = {};

myProject = {
    name: 'Martin Detlefsen',
    photo: "images/yourprofileimagename.png",
    favoriteFoods: [
        'Asado',
        'Locro',
        'Milanesa',
        'Hamburguers',
        'Spagetti'
    ],
    hobbies: [
        'Spend time with my family',
        'Programming code',
        'Play Videogames',
        'Watch Series on Netflix/Disney',
        'Travel',
        'Cooking'
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */

myProject.placesLived.push(
    {
        place: 'Cordoba, Cordoba, Argentina',
        length: '25 years',
    },
    {
        place: 'Comodoro Rivadavia, Chubut, Argentina',
        length: '8 years'
    },
    {
        place: 'Rawson, Chubut, Argentina',
        length: '2 years'
    },

)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProject.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProject.photo;

/* Favorite Foods List*/
myProject.favoriteFoods.forEach(function (food) {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProject.hobbies.forEach(function (hobby) {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li)
})

/* Places Lived DataList */

/* I create a function that will display the layout */
const placesLivedLayout = (placesLivedArray) => {
    const placesLength = placesLivedArray.map((PL) =>
        `<dt><b>${PL.place}</b></dt>
        <dd><sup><big>${PL.length}</big></sup></dd>`
    );
    document.querySelector('#places-lived').innerHTML = placesLength.join("");
};
/* I instantiate the function that displays the layout */
placesLivedLayout(myProject.placesLived);