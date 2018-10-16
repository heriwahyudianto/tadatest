const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/**/
  
let month="";
let year="";
rl.question('Which month do you want? ', (answer) => {
  month=answer;
  rl.question('Which year do you want? ', (answer2) => {
    year=answer2;
    console.log(month);
    switch(month) {
        case "1":
            console.log(31);
            break;
        case "2":
            if (year%4==0){
                console.log(29);
            } else {
                console.log(28);
            }
            break;
        case "3":
            console.log(31);
            break;
        case "4":
            console.log(30);
            break;
        case "5":
            console.log(31);
            break;
        case "6":
            console.log(30);
            break;
        case "7":
            console.log(30);
            break;
        case "8":
            console.log(31);
            break;
        case "9":
            console.log(30);
            break;
        case "10":
            console.log(31);
            break;
        case "11":
            console.log(30);
            break;
        case "12":
            console.log(31);
            break;
        }
    rl.close();
  });
  
  //rl.close();
});
  