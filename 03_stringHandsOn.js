function stringHandsOn(){
    var sentence = "   Hey you are doing good, keep it up   ";
    console.log(`Step 1 : Given string is - ${sentence}`);
    var result = sentence.length;

    console.log(`-------------------------------------------------------------------------------------------------------`);

    console.log(`Step 2: Length of the given string is - ${result}`);

    console.log(`-------------------------------------------------------------------------------------------------------`);

    var sentence = "   Hey you are doing good, keep it up   ";
    var lengthBeforeTrim = sentence.length; 
    var sentenceAfterTrim = sentence.trim();
    var lengthAfterTrim = sentenceAfterTrim.length;
    console.log(` Setp 3 : Remove extra spaces and sentence is :"${sentenceAfterTrim}" it's length is : ${lengthAfterTrim} `);

    console.log(`-------------------------------------------------------------------------------------------------------`);

    console.log(`Step 4 : Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);

    console.log(`-------------------------------------------------------------------------------------------------------`);

     var sentenceTrim = sentence.trim();
     var result = sentenceTrim.charAt(0);
     var resultValue = sentenceTrim.charAt(sentenceTrim.length-1)
    console.log(`Step 5 : First Character after trim is : ${result}, And Last character after triming is : ${resultValue}, after step 3`);

    console.log(`---------------------------------------------------------------------------------------------------`);

    var totalWords = sentenceTrim.split(" ")
    var word = totalWords.length
    console.log(`Step 6 : The count of total words available in string after step 3 is : ${word}`);

    console.log(`---------------------------------------------------------------------------------------------------`);

    var index = sentenceTrim.indexOf("good")
    console.log(`Step 7 : Index of word good is : ${index}`);

    console.log(`---------------------------------------------------------------------------------------------------`);

    var subString = sentenceTrim.substring(22);
    console.log(`Step 8 : Substring starting from index 22 is : ${subString}`);

    console.log(`---------------------------------------------------------------------------------------------------`);

    var stringEnd = sentenceTrim.endsWith("up")
    console.log(`Step 9 : Check, is string ends with word "up" after step 3 is : ${stringEnd}`);

    console.log(`---------------------------------------------------------------------------------------------------`);

    var stringStart = sentenceTrim.startsWith("Hey");
    console.log(`Step 10 : Check is string starts with word "Hey" after trimming after step 3 output is : ${stringStart}`);
    }
    stringHandsOn()