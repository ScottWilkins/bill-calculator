function scrub(str){
  return str.split(" ").map(b=> b.split("").
             filter(a=> a.match(/[\d+\.]/g)).
             join("")).filter(a=> a!=="")
}
function sum(arr) {
  return arr.reduce((a,b)=> +a + +b)
}
function monetize (num){
num = +num
  return `$${num.toFixed(2)}`
}
function sumDivide(p1,p2,name1,name2){
  var avg = (+p1 + +p2) / 2;
  console.log(avg);
  return +p1 > +p2 ? `${name2} owes ${name1} $${(avg- +p2).toFixed(2)}` :
                   `${name1} owes ${name2} $${(avg- +p1).toFixed(2)}`
}
