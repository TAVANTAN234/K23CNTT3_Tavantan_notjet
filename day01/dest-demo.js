var array = [11,22,33,44,];
var [x,y]=array;
console.log("x=",x);
console.log("y=",y);

var [a,b,c,]=array;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

// object
const person ={
    nema: "van tan",
    city: "New York"
};

console.log(person.nema);
console.log(person.age);

const {nema,city} = person;
console.log(nema);
console.log(city);