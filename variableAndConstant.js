// Variables And Constant In JS

// const keyword => const fixed cannot be changed

const accountId = 1;
// accountId = 2; TypeError: Assignment to constant variable.
// console.log(accountId);

// 1)let keyword , 2)var keyword => in both let and var values can be changed

let accountEmail = "ps@gmail.com";
accountEmail = "Pratham@gmail.com";
// console.log(accountEmail);

/*
Note: Prefer not to use var because of issue in 
block scope
and
functional scope
*/

// Always use const and let

var accountPassword = "1501";
accountPassword = "15012003";
// console.log(accountPassword);

accountCity = "Khargone";
accountCity = "Indore";
// console.log(accountCity);

let accountState; //undefined

// printing using table in console
// console.table([]);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// ┌─────────┬─────────────────────┐
// │ (index) │ Values              │
// ├─────────┼─────────────────────┤
// │ 0       │ 1                   │
// │ 1       │ 'Pratham@gmail.com' │
// │ 2       │ '15012003'          │
// │ 3       │ 'Indore'            │
// │ 4       │ undefined           │
// └─────────┴─────────────────────┘
