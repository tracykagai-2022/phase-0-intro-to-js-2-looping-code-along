// Code your solutions in this file
const names=["Guadalupe","Ollie","Aki"]
function writeCards(names, event) {
    let messages = []
    for (let i=0; i < names.length; i++) {
        messages.push("Thank you, " + names[i] +", for the wonderful "+event);
    }
    return messages;
}
console.log(writeCards(names, "suprise"))
let i;
function countDown(i){
    while( i> -1){
        console.log(i);
        i--;
    }
}
countDown(10);