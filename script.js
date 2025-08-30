// =========================
// Part 1: Variables & Conditionals
// =========================
let userName = "Jakes";
let userAge = 22;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}

// =========================
// Part 2: Custom Functions
// =========================
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

function addNumbers(a, b) {
  return a + b;
}

greetUser(userName); // Calling function
console.log("Sum of 5 + 3 is:", addNumbers(5, 3));

// =========================
// Part 3: Loops
// =========================
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// Example 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// =========================
// Part 4: DOM Interactions
// =========================

// 1. Change text content when button clicked
document.getElementById("btnChangeText").addEventListener("click", function() {
  document.getElementById("info").textContent = "The text has been changed!";
});

// 2. Add a new item to the list
document.getElementById("btnAddItem").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("itemList").children.length + 1);
  document.getElementById("itemList").appendChild(newItem);
});

// 3. Toggle background color of the page
document.getElementById("btnToggleColor").addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
});
