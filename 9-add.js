
function myAddFunc(arg){
    let num1 = arg[0];
    let num2 = arg[1];
    if (num2 === undefined){
        {console.log("NaN")}
    }
    else if (num1 === undefined){console.log("NaN")}

    return console.log(Number(num1) + Number(num2))

}
myAddFunc(process.argv.slice(2))