var a = 0;
var b = 1;
var count = 2;
var t = 1;
var c;
while (count <= 8) {
    c = a + b;
    count++;
    t += c;
    a = b;
    b = c;
}
console.log(t);
