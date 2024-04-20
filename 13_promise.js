let notesReady = true;
const promise = new Promise( function(success, reject ){
    if (notesReady) {
        success(`Here you go guys. Please use this notes..`);
    }
} );
promise.then(function(onSuccess){
    console.log(onSuccess);
}).catch(function(onFailure){
    console.log(onFailure);
}).finally(function(){
    console.log(`Finally I must my notes...`);
});
// async and await