function loopFunc(i){
 for(let x=0;x<i; x++){
    console.log("C is fun")
 }
}
loopFunc(process.argv.slice(2))