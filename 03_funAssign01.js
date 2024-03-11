console.log("=================== Step1 ===========================");
function show(){
    console.log("HI, I'm Sushant Here");
}
show()
function java(){
    console.log("I am a web devloper");
}
java()

console.log("===================== Step 2 ===================================");

 function personalDetails(Sushant,jedhe,TAE){
   console.log("My first name is :", Sushant);
   console.log("My last name is :",jedhe);
   console.log("My college name is :",TAE);   
 }
 personalDetails("Sushant","jedhe","TAE")

 console.log("==================== Step 3 =============================================");
 
 function swapValues(arg1 , arg2 ){
    console.log("Value before swap is :",arg1,arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("VAlue after swap is :",arg1,arg2);

 }
 swapValues("Virat","Anushka")
 swapValues(1000,2000)

 console.log("====================== Step 4 =====================================================");

 function addThreeValues(n1,n2,n3){
    var result = n1+n2+n3;
console.log("Addition of three values",result);
 }
 addThreeValues(10.23,600,40)
 addThreeValues("Hello"," Good"," Morning")