// function sqFunc(i){
 
//     for(let x=0; x<i ;x++){
//            let output =''
//         for(let y=0; y<i; y++){

//             output += "#"+' '
//         }
//           console.log(output)
//     }
// }
// input = Number(process.argv.slice(2))
// sqFunc(input)

// function sqFunc(i){
//     let x=0
//     while( x<i ){
//         //    let output =''
//         // while(output<i){

//         //     output += i+' '
//         // }
//           console.log('#'.repeat(i))
//           x++
//     }
// }
// // input = Number(process.argv.slice(2))
// sqFunc(input)
let input = Number(process.argv.slice(2))
function sqFunc(i){
if(input>0){
[...Array(i)].forEach(() => {
        console.log('X'.repeat(i))
    });
}
else{console.log("Missing size")}
    
}
sqFunc(input)