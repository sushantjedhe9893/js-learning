console.log(`------------------------ Step 1 --------------------------------------------`);

function squareOfWordLength(word1, word2, word3) {
var javascriptLength1 = word1.length;
var result1 = javascriptLength1 * javascriptLength1;
var javascriptLength2 = word2.length;
var result2 = javascriptLength2 * javascriptLength2;
var javascriptLength3 = word3.length;
var result3 = javascriptLength3 * javascriptLength3;
console.log(`Square of the length of the string ${word1} is : ${result1}`);
console.log(`Square of the length of the string ${word2} is : ${result2}`);
console.log(`Square of the length of the string ${word3} is : ${result3}`);
}
squareOfWordLength("Javascript", "Google Chrome", "Developer smart")

console.log(`------------------------ Step 1 --------------------------------------------`);

function operator(sentence){
    var string = sentence.length;
    var totalWords = sentence.split(" "); 
    var word = totalWords.length;
    var result = string / word;
    var result1 = string * word;
    console.log(`Length of the sentence is  : ${string}`);
    console.log(`Number of words in string is : ${word}`);
    console.log(`Result of division of string length by number of words is : ${result}`);
    console.log(`Result of Multiplication of string length by number of words is : ${result1}`);
}
operator("I am Angular Developer")
