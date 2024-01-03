const accountId = 144223
let accountEmail = "Ranjana@google.com"
var accountPassword ="123456"
accountCity ="Bombay"

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword ="password"
accountCity ="chennai"   /* this type also variable is also declare without using variable keywords*/
let accountState;         /* in out of print this will show undefined */


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);

/*
Prefer not to use var variable
because of issue in block scope and functional scope
*/



