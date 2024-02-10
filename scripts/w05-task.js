/* W05: Programming Tasks */

/* Declare and initialize global variables */
const URL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        h3.textContent = temple.templeName;

        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.templeName);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '270em');

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

async function getTemples() {
    const response = await fetch(URL)
    templeList = await response.json();
    //console.log('Temple list: ', templeList)
    if (templeList.length > 0) {
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    document.querySelectorAll('article').forEach(article => article.remove());
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => { filterTemples(templeList) });
