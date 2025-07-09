function myfunc(arg){
        console.log(`${arg[0]} is ${arg[1]}`)
    
} 
myfunc(process.argv.slice(2))