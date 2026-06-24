let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day!");
} 

//output tuesday

///////////////////////////////////
const x = 10;
const y = 5;

switch (x + y) {
case 15:
    console.log("Result is 15.");
    break;
case 20:
    console.log("Result is 20.");
    break;
default:
    console.log("No match found.");
}                                   
 
//result is 15

////////////////////////////////////////////
let grade = "B";

switch (grade) {
case "A":
    console.log("Excellent!");
    break;
case "B":
    console.log("Good!");
    break;
default:
    console.log("Not specified.");
} 
//GOOD!