// function sum(i){
//     let sum=0
//     // let n = i
//   for(let x=1; x<=i;x++){
//      sum  += i
//     }
//      console.log(sum)

// }
// sum(3)


function pdt(arg){
    let input = Number(arg[0])
    if (isNaN(input)||input<=0 ){
        console.log(1);
        return
    }
    if(input>100){
        console.log("Infinity");
        return
    }
    let product = 1
    for(let i=1; i<=input; i++){
        product *=i
    }
    console.log(product)
}
pdt(process.argv.slice(2))
