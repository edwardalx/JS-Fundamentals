function myfunc(arg){
    num = Number(arg[0])
if (!isNaN(num)){
    console.log(`My number: ${arg}`)
}
else{
    console.log("Not a number")
}
}
myfunc(process.argv.slice(2))

// function myfunc(arg) {
//     const num = Number(arg[0]);

//     if (!isNaN(num)) {
//         console.log(`My number: ${num}`);
//     } else {
//         console.log("Not a number");
//     }
// }

// myfunc(process.argv.slice(2));