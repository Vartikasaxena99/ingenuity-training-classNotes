import {  message } from "./library.js";
import { display } from "./library.js";
// import { message,display } from "./library.js";//or we can write multiple import together by using comma so we will not have to write import again and again
import * as Data from "./library.js";
import ImportantMsg from "./library.js";
console.log(Data.message);
console.log(message);

var name=prompt("enter your name");
var data=display(name);
console.log(data);