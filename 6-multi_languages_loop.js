let a = ['C', 'Python','JavaScript']
let b = ['fun','cool','amazing']


for(x=0;x<3; x++){
    // console.warn(a[x] + " is " + b[x]);
}

let i = 0
while (i<a.length) {
    // console.info(a[i] + " is " + b[i]);
    i++
}

a.forEach((element,position) => {
    console.log(element + " is " + b[position]);
});
