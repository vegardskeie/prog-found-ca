//Question 1
var animal = "tiger";

//Question 2
var person = {
  firstName: "vegard",
  lastName: "skeie"
};

//Question 3
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//Question 4
var persons = ["Fred", "Ole", "Svein", "Petter", "John"];
console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);
console.log(persons[3]);
console.log(persons[4]);
for (var i = 0; i < numberOfPersons; i++) {
  console.log(Persons[i]);
}

//Question 5 and 6
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

//Question 7
var catAndDog = [
  //first item
  {
    name: "ole",
    age: 15,
    colorBrown: true
  },
  //second item
  {
    name: "terje",
    age: 21,
    colorBrown: true
  }
];

for (var i = 0; i < catAndDog.length; i++) {
  console.log(catAndDog[i].age);
  console.log(catAndDog[i].colorBrown);
}

//Question 8
function whatIDontLike(argument) {
  console.log("I don´t like " + argument);
}

argument("fish");
argument("rainy days");

//Question 9
function names(firstName, lastName) {
  var fullName = firstName + lastName;
  console.log(fullName);
}
names("Ola", "Nordmann");

//Question 10
var emptyArray = [age(19)];

function age(number) {
  console.log("My age is " + number);
}
