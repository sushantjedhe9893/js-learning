async function data(){
    return "Hello - This is data"
}
const result = data();
result.then(function(success){
    console.log(success);
});