const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (answer) => {
  for (i = 1; i <= answer.length; i++) {
    console.log(answer);  
  }
  rl.close();
});