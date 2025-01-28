const accountId = 144553;
let accountEmail = "PS@gmail.com";
var accountPassword = "12345";
accountCity = "Khargone";
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2;//TypeError: Assignment to constant variable.
//console.log(accountId);

accountEmail = "pratham@gmail.com";
accountPassword = "150103";
accountCity = "Indore";

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
// │ 0       │ 144553              │
// │ 1       │ 'pratham@gmail.com' │
// │ 2       │ '150103'            │
// │ 3       │ 'Indore'            │
// │ 4       │ undefined           │
// └─────────┴─────────────────────┘
