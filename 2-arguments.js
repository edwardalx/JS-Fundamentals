

function myfunc(arg){
let count = arg.length
if (count===0){
    console.log("No argument")
}
else if (count === 1){
    console.log("Argument found")
}
else{
    console.log("Argumants found")
}
}

myfunc([]);