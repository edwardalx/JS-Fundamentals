let number = -0

if (number > 0){
    console.log(`${number} is a possitive number`)
}
else if(number<0){
    console.log(`${number} is negative`)
}
else{
    console.log(`${number} is nutral`)
}

for(x=0; x<10; x+=2){
console.log(x)
};

function sum(num1,num2){
 let result = num1+num2
 return console.log("result = "+ result)
}

for(x=0; x<10; x+=2){
sum(x,x)
};
