

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints.length);




// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);


// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

console.log(pointsTotal)
console.log(gpa)

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex)


