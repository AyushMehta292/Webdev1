const accountId = 144553
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Hzb"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
accountState= "Karnataka"
console.log(accountId, accountCity, accountState);

/*
Prefer not to use var
because of issue in block scope and functional 
--> var has function scope, which differs significantly from block scope used by let and const.

*/
if (true) {
  var b = 40;
}
console.log(b); // 40

for (var i = 0; i < 3; i++) {
  //Loop code
}
console.log(i); // 3


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])