var greet = "Good Morning";
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);

console.log("==================================================");

function totalWords(){
    var happy = "I am happy"
    var resultValue = happy.split(" ")
    console.log(resultValue);
    console.log(`total words are : ${resultValue.length}`);
    var learning = "I am learning js the language of internet ";
    var result = learning.split(" ");
    console.log(result);
    console.log(`total words are : ${result.length}`);
}

totalWords()