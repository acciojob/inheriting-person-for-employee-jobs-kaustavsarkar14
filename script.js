// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor with the name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype
Employee.prototype = Object.create(Person.prototype);

// Add a method specific to Employee
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage:
const employee1 = new Employee("John", 30, "Software Engineer");
employee1.jobGreet(); // This will log: Hello, my name is John, I am 30 years old, and my job title is Software Engineer.
employee1.greet(); // This will also work since it inherits the greet() method from Person.

