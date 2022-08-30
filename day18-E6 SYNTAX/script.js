//ES5 variables:

var a=10;//global scope as well as local scope
{
    b=20
    console.log(b);
}
console.log(b);

//ES6 VARIABLES
//let ,const  //if wwe are using const we can not change its value again
//BLOCK SCOPE
{
    let c=10;
    console.log(c);
}
console.log(c);//error c is not defined
// here c is a block variable its accessibility is only inside the block

const sessions=120;
console.log(sessions);
sessions++;
console.log(sessions);


//arrow function
const sayHi=() => console.log("this is an arrow function");
sayHi();
const add=(x,y) => x+y;
let result=add(5,10);
console.log(result*100);

// callback ,for each loop and async we use arrow function

/*setInterval(()=>//async
{

},interval)*/


var a=[1,2,3,4,5,6,7,8,9,10];
let x=a[0];
let y=a[1];
let z=a[2];
/*//destructuring

let[a1,b]=a;
console.log(a);
console.log(b);

//for getting last element

let[a2,b1,,,,,,,z1]=a;
console.log(z1);*/


/*
let person={
    name:"vartika",
    age:30,
    email:"abc@gmail.com",
    city:"mahoba"
}
console.log(person.city);
console.log(person.name);


// destructuring with objects
let{name,email,city}=person;
console.log(person.city);
console.log(person.name);
*/