/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
const test = "text";
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20
*/
const sum = 10 + 20;
/* Ex.C
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
const random = Math.floor(Math.random * 21);
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
let me = {
  name: "John",
  surname: "Doe",
  age: 18,
}
/* Ex.E
    Programmatically remove the Age from the previously create object Me
*/
delete me.age;
/* Ex.F
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
const skills = ['js', 'html'];
me = {
  ...me,
  skills
}
/* Ex.G
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
me.skills.pop();
// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
const dice = () => {
  return Math.floor(Math.random() * 6) + 1;
}
/* Ex.2
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
const isString = (str) => {
  return (typeof (str) === "string") ? true : false;
}
const isNumber = (nbr) => {
  return (typeof (nbr) === "number") ? true : false;
}
const whoIsBigger = (i, j) => {
  return isNumber(i) && isNumber(j) ? (i > j ? i : j) : undefined;
}
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const splitMe = (str) => {
  return str.split(' ');
}
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
const deleteOne = (str, bool) => {
  return (bool) ? str.substr(1) : (str.length > 1 ? str.substr(0, str.length - 1) : "");
}
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
const onlyLetters = (str) => {
  convert = str.replace(/[0-9]/g, '');
  return convert;
}
/* Ex.6
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const isThisAnEmail = (str) => {
  const email = /[\d\w]+@+[\w\d]+\.+\w/;
  return email.test(str);
}
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const whatDayIsIt = () => {}
/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
const rollTheDices = (n) => {
  let tmp = [];
  if (isNumber(n)) {
    for (i = 0; i < n; i++) {
      tmp.push(dice());
    }
  }
  const sum = tmp.reduce((a, b) => a + b, 0);
  // const tmp2 = `${tmp}`.split(",").join(", ")
  // const result = `{\n  sum: ${sum}\n  value: [ ${tmp2}]\n}`
  const result = {
    sum: sum,
    value: tmp,
  }
  return result;
}

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
// now - date
function howManyDays(input) {
  let now = new Date();
  let past = new Date(input);
  let days = (now - past) / (1000 * 3600 * 24);
  return days;
}

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

function isTodayMyBDay() {
  bDay = new Date("1997/07/01")
  return bDay === Date();
}
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/
function DeleteProp(obj, str) {
  //console.log(`${obj}.${str}`);
  delete obj[`${str}`]
  return obj;
}

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [{
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* Ex.12
    Write the function OlderMovie that finds the older movie in the array
*/
function olderMovie() {
  let oldest = movies[0].Year;
  for (i = 1; i < movies.length - 1; i++) {
    if (oldest > movies[i + 1].Year) {
      oldest = movies[i + 1].Year;
    }
  }
  return oldest;
}

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
function countMovies() {
  return movies.length;
}

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
function onlyTitles() {
  let output = [];
  for (i = 0; i < movies.length; i++) {
    output.push(movies[i].Title);
  }
  return output;
}

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
//returning all movies info instead of titles
function OnlyThisMillennium() {
  let output = [];
  for (i = 0; i < movies.length; i++) {
    if (1999 < movies[i].Year) {
      output.push(movies[i]);
    }
  }
  return output;
}
/* Ex.16
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/
function getMovieById(id) {
  let output = [];
  for (i = 0; i < movies.length; i++) {
    if (id === movies[i].imdbID) {
      output.push(movies[i]);
    }
  }
  return output;
}
//console.log(getMovieById("tt0167261"));
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

function sumYears() {
  let output = [];
  for (i = 0; i < movies.length; i++) {
    output.push(parseInt(movies[i].Year));
  }
  const sum = output.reduce((a, b) => a + b, 0);
  return sum;
}
//console.log(sumYears());
/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
function searchMovie(str) {
  let output = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(str) != -1) {
      output.push(movies[i].Title);
    }
  }
  return output;
}
//console.log(searchMovie("Avengers"));
/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/
function searchAndDivide(str) {
  let match = [];
  let nonMatch = [];
  match = Object.assign(searchMovie(str));
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(str) == -1) {
      nonMatch.push(movies[i].Title);
    }
  }
  return `match: ${match}\nnonMatch: ${nonMatch}`.split(",").join(", ");
}
//console.log(searchAndDivide("Avengers"));

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/
function deleteX(n) {
  movies.filter(n)
}

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/
function halfTree(height) {
  if (isNumber(height)) {
    if (height < 0)
      height = -height;
    let tree = [];
    for (i = 0; i < height; i++) {
      let stars = [];
      let width = i;
      for (j = 0; j <= width; j++) {
        stars.push("*");
      }
      let tmp = stars.join("")
      tree[i] = Object.assign(tmp)
    }
    for (i = 0; i < height; i++) {
      let text = `${tree[i]}`
      console.log(text)
    }
  }
}
//halfTree(5)
/* Ex.22
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example:
  Tree(3)
    *
   ***
  *****
*/

function tree(height) {
  if (isNumber(height)) {
    if (height < 0)
      height = -height;
    let tre = [];
    for (i = 0; i < height; i++) {
      let stars = [];
      let width = i;
      for (k = 0; k < Math.floor(height / 2); k++) {
        stars.push(" ")
        for (j = 0; j <= width; j++) {
          stars.push("*");
        }
      }
      let tmp = stars.join("")
      tre[i] = Object.assign(tmp)
    }
    for (i = 0; i < height; i++) {
      let text = `${tre[i]}`
      console.log(text)
    }
  }
}
//tree(5)
/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/
