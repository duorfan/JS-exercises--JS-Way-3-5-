// improved hello
function sayHello(firstName, lastName) {
  return `Nice to meet you, ${firstName} ${lastName}!`;
} 
  
const firstName = prompt(" May I know your first name? ");
const lastName = prompt(" And your last name? ");
console.log(sayHello(firstName, lastName));
