// 1️⃣ Variables & Declarations

// Learn deeply:
// var ❌ (why it’s dangerous)
// let ✅ (block scoped)
// const ✅ (default choice)
// Rule (Atlassian-level discipline):
// Use const everywhere unless reassignment is required.

// const name = "Animesh";
// let score = 0;
// score +=10;

// 2️⃣ Data Types (Core)
// You must know why, not just what.
// Primitive:string number boolean undefined null
// Reference: object array

// const age = 23; Number
// const isLogged = true; Boolean
// const user = {name:"Animesh",age:23} object
// type of null : object ! (legacy JS Bug)

// 3️⃣ Operators (Only the Important Ones)
// Arithmetic: + - * / %
// Comparison:
//     === ✅ (strict)
//     == ❌ (never use)

// 5==="5" false (good)
// 5==5 true (bad)

// 4️⃣ Control Flow

// You must write predictable logic.

// if (score >= 90) {
//   console.log("Excellent");
// } else if (score >= 60) {
//   console.log("Good");
// } else {
//   console.log("Needs Improvement");
// }

// 5️⃣ Clean Code Rules (Non-Negotiable)
// Meaningful variable names
// No magic numbers
// One responsibility per block

// ❌ Bad
// let x = 10;


// ✅ Good
// const maxScore = 10;