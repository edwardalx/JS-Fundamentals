function loopFunc(i){
//  for(let x=0;x<i; x++){
//     console.log("C is fun")
//  }
// let x =0;
// while(x<i){
//     console.log("C is fun");
//     x++;
// }

Array.from({length:i}).forEach(() => {
    console.log("C is fun");
});
}
let input = Number(process.argv.slice(2))
loopFunc(input)