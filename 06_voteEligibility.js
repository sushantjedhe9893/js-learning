

var voteEligible = function(age){
if (age>=18) {
    console.log(`Yes, He/She is eligible for voting ${age} `);   
}else { 
    if (age<=0 || age>100 || age==undefined || age==null) {
        console.log(`Invalid input ${age}`);
}else{
    console.log(`Sorry. You are not eligible. Age: ${age}`);
}
}
}   
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
// voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);