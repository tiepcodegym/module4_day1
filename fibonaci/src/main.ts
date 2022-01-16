let a: number = 0;
let b: number = 1;
let count: number = 2;
let t: number = 1;
let c;
while (count<=8){
    c = a+b;
    count++;
    t+=c;
    a=b;
    b=c;
}
console.log(t)