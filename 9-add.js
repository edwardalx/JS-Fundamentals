
function myAddFunc(arg){
    let num1 = Number(arg[0]);
    let num2 = Number(arg[1]);
    if (isNaN(num1)||isNaN(num2)){
        console.log("NaN")
        return
    }
    // if (num1 === undefined){console.log("NaN")}

    return console.log(num1 + num2)

}
myAddFunc(process.argv.slice(2))