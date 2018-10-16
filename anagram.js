const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let kata1="HErI";
let kata2="ireh";;

rl.question('First word? ', (answer) => {
    kata1=answer;
    kata1 = kata1.toLowerCase().split('').sort().join('');
    rl.question('Second word? ', (answer2) => {
        kata2=answer2;
        kata2 = kata2.toLowerCase().split('').sort().join('');
        if (kata1==kata2){
            console.log("true");
        } else {
            console.log("false");
        }
        rl.close();
    });
});
