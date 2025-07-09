function myfunc(arg){
if (arg / 2){
    console.log(`My number: ${arg}`)
}
else{
    console.log("Not a number")
}
}
myfunc(process.argv.slice(2))