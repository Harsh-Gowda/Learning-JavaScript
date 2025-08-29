// // words vs keywords
// //First module -  variable and declaration 
// //1.var, let, const - line by line comparison

// var a ; //declartion called this line of code
// var a = 12; //This is called declare and initialization value of that varible.


// let b =12;
// let c =14;
// const harsh = "web"; // this value is not change and it will be always constant

// //scope (global, block, functional)

// {} 
// var f =12; // in here the variable will be outside of curly bracket it called global

// {
//     let c =20; // Let is called as block code it will be used inside of the block and it will not globaly  we cant declre. 
//     // and one more let will work in 1st block it will be respect 1 st block it means { { let } }
// }
// function abc(){
//  if (true) {
//     var d = 40; // This is functional scope means we used var keyword will be used inside of the bloack anywhere.
//  }
// }

// // Reassignment, redeclaration

// var a = 12;
//  a= 40;
//  var a =35; // iN here varible will be allowed to re declare
//  let i= 20;
//  i=100; // In here let will be not allowed to redeclare same name again

//  //Temporal dead zone - It means js is know wht u print the value will be there but printing formtion is not correct after 
//                             // assigning value u can print but not before assigning the value or varible etc

//  let z =30;
//  console.log(z); // Always declare after the assign value and print whetehr you  write code console.log before it will be throw error 

//  var d = 10; // global vrible
//  {
//     var d =20; // global variable because in here function is not declared
//  }
//  console.log("value is", d); 

//  let e = 4; // This is globally declared
//  {
//     let e = 3;
//     console.log("Inside = ", e); // Inside the block so it is not globally declared 
//  }
//  console.log("Outside =", e);

// //  ------------ * ------------* --------------

// // moduel 2 - Data Types + Type system

// // i) Primitives - string, num, boolean, null , undefined, symbol, bigint
// // ii) non primitive - arrays, objects, function [], {}, ()

// let f = 40;
// let g = f;

// f = f + 10;
// console.log(f);

// iii) symbol - Unique Immutable value

let s1 = Symbol("Harsh");
let s2 = Symbol("Gani");


// arrays
let k = [1,2,3];
let o = k;

//objects

let obj = {
   uid : 1,
   name : "Harsh",
   age : 22,
   email: "h1@gmail.com",
};

let u1 = Symbol("uid"); // In here symbol used for give our own name,id number etc using symbol.
obj[u1]="23";

let c = 9007199254740991n; // In here always add n in last of number it will be represent bigint in javascript and in output also it will be show n in last
// objects exmple

let d = {
   name:"harsh",
};
let e = d;
d.name = "shash";


// iv) Dynamic typing  - It means we can write the code many type with one name  str,num,bool etc.
//example - let a = "Harsh, a= 12, a= true, a= null etc 
// typeof quirks // This is mean to find of type of what we give in question like 'harsh' - string | we find like this -> typeof 'harsh'.

// v) Type coercion  (== vs ===)
//Truthy vs falsy values
//type coercion ->  TO convert one type into another type in javascript 

// Predict the result

// true + false 
// ans = 1 // Because true = 1 and false = 0 always

//-----------------------******--------------------------

// Module 3  Operators
// Airthmatic opertor = +, - , / , * ,  % , **
// Addition , Substraction, Multiplication, Division , Modules %, Exponantion ** 

let airthmatic = {
 add : 1 + 1 ,
sub :  2-1 ,
div : 4/2 ,
mult : 4*4,
modules : 2%10,
expo : 3**3
};
console.log(airthmatic);

//Comparison Operator = 

// comparison opertor == , ===

121 == "121" // this exmple will give proper answer true double equal not check it is a string or not 
121  === "121" // this is give fasle because 3 equal check given exmple is string or not
12 != 13  // Not strict comparison
"harsh" !== "gani" // is strict comparison
12 > 13 

//Assignment Operator

let s = 20;
s +=3;
s -=10;
s *=3;
s /=9;
s %= 2;

// Ternary opertor -> Important for frent and back end dev
10 < 20 ? console.log("This is right ") : console.log("This is Wrong"); 

let num1 = 40;
let num2 = 20;

if(num1>50 && num2 < 60){
   console.log("yes correct");

}else{
   console.log("Not correct");
}

 let admin = true;   
 let login = true;

 if(admin || login){
   console.log("Yes,Login");
 }else{
   console.log("No, Login");
 };

 let score = 50;

 let mark = score >= 90 ? "A" : score >= 50 ? "B" : score <=30 ? "C" : "fail";
 console.log(mark);

 let log = true ;
 let pass = false ; // Login time email and password  match we used in that time whethe rit will be not matching then it will throw error
  
 let access = log && pass  ? "Allow" : "Deny";
 console.log(access); 

 // Increement and Decreement

 let incr = 10;
++ incr ;
 console.log(incr);

 let decr = 20;

if( ++decr === 19){
   console.log("Yes");
}else{
   console.log("No"); 
}

let n =10;


let input =  ++n + ++n;
let res = n++ + ++n ;
console.log(res,input);

// -------------------- *********--------------------

// Module-> 4 = Control Flow
// concept- if, else, else if ,switch , early return pattern
if (10>=20){
   console.log("Yes");
}
else if(5<=10){
   console.log("No");
}
else if(10>40) {
   console.log("Try any other");

}

else{
 console.log("Not correct");
}

// switch

switch (2) {
   case 1:
      console.log("1");
      break; // Break is important to execute output otehrwise it will be execute other also 
   case 2:
      console.log("2");
      break;
      default: // This is important otherwise it will be not work
}

//early return pattern - > It means we can use return in same line so it called early return pattern

function find(val){
   if (val>100) return "More 100";
   else if (val ===100) return "Less 100";
   else if (val<= 35) return "Hey you failed";
   else return "fail";
}
console.log(find(20));

function getScore(score){
   if(score >= 90 && score <= 100){
      console.log("A grade");
   }
   else if (score >=80 && score <=90){
      return "B grade";
   }
   else if (score >=60 && score<= 70) {
      return "C grade";
   }
    else if (score >=35 && score<= 60) {
      return "d grade";
   }
   else if (score >=1 && score <=35){
      return "Fail The student";
   }
   else{
      return "Invalid Number";
   }
}
console.log(getScore(110));

function rpc(user, computer){
   if (user === computer){
      return "Draw";
   }
   
   if (user === "rock" && computer === "scissor") return "user"; //this is one step or we write all code same for computer also
   if (user === "paper" && computer === "rock") return "user"; //this is one step
   if (user === "scissor" && computer === "paper") return "user";//this is one step
   return "Computer";

}
console.log(rpc("rock","scissor"));

// ----------------------------------**************************--------------------------

//Module 5 - > Loops

//For loop - It means we know exact starting and ending point and how we go means 1 to 50 with add +1 to reach 50
//While loop - It means we dont noo exact where we stop so in that time we used .


/*
            For loop

            for(start; end; change){
            }
            while loop -> (only end and change here)
            while(end){
               //code is here
            change 
            }

*/

for (let i = 1; i < 5 ; i++){
   console.log("For Output :", i);
};

let j =1;
while (j<5){
   console.log("while Output :",j);
   j++;
};

let count = 4;

do {    // it will be execute whatever while value will be not match  
   console.log("Do while Output :", count);
   count ++;
}
while (count<2); //In here while value will be less than of do value so while value not execute whetehr while value 6  than it will be execute 

// ----------------------************-----------------------

// Break and Continue concept 

for (i = 1; i < 5; i++){
   console.log("Break ", i);

   if(i === 2){
      break; // In here the loop will be stop and exit when it 
   }
}

for (i = 1; i < 5 ; i++){
   if(i === 3){
      
      continue; // In here it drop 5 and continue the loop  
   }
   console.log("Continue", i);
}
// To find a 1 to 10 numbers

for (let i = 1; i < 6; i++){
   console.log("For Loop", i);
}

//Reverse Number 10 to 1

for (let i = 5; i > 0 ; --i){
   console.log("For Reverse Loop", i);
};

// While loop with get 10 to 1 number

let num  = 3;

while(num>0){
   console.log("While Loop",num);
   num--;
}
 
//Even number using for loop

for(i = 1; i < 11; i++){
   if(i % 2 === 0) {
      console.log("Even Number ",i);
   }
}

// Odd Number find  

for(i = 1; i < 6; i++){
   if(i % 2 === 1){
      console.log(i);
   }
}

//Multiplication table of 5

for (i =1 ; i<10; i++){
  
      console.log(`5* ${i} = ${5*i}`);     // to print full format we used dynamic pattern $ using 
   
}

// Sum of number 1 to 100

 let sum = 0; 
 for (i = 1; i < 101 ; i++){
   sum= sum+i;
}
   console.log(sum);

// Divided by 3 -> To find a divisibl by 3

for (let i=0; i<20; i++){
   if(i%3 === 0){
      console.log(i);
   }
}

// Enter number and check odd or even

let val = prompt("Enetr a number");      // Prompt used like to input field

for (let i =0; i<= val; i++){
   if (i%2 === 0){
      console.log(`${i} is even`);
   } else {
      console.log (`${i} is odd`);
   }
}

// 1 to 100 number print when you get divisible by 7 then stop

for (let i = 1 ; i < 100 ; i++){
   // console.log(i); or
   console.log(`${i} Breaked`);
   if(i % 4 === 0){
      break;                          // here we used to break for stop the which number we want
   }
}

// Skip the number of which is mult by 3 

for (let i = 1; i < 8; i++){
   if(i % 3 === 0){
      continue;                      // Here we used continue it will be skipped multi by 3 
   }
   console.log(i);
}

// First 5 odd number to print  1,3,5,7,9

let odd = 0;                        // declare odd number is 0
for(let i =1 ; i<101; i++){
   if(i%2 === 1){
      odd++                          // To count the number  odd 
      console.log("5 odd number ; ",i);
   }
   if(odd === 5){                    // when you got odd number count will be 5 then break 
      break;
   }
}

// The sum of 10 

let add = 0;

for (let i =0; i<11; i++){
   add = add + i;
}
   console.log("Sum of 10",add);

// Factorial number to find 

let fac = 1;

for (let i = 1; i<6; i++){
   fac = fac * i;
}
console.log("Factorial is :", fac);

//To print array of fruits


let fruits = ["apple", "banana", "mango"];
for (let i =0; i<=fruits.length; i++){
   console.log(fruits[i]);
}

// Return answer from 10 to 1

for (let i = 10; i>=0; i--){
   console.log(i);
}

// Vowels find 

let word = "India";
let vowel = "aeiouAEIOU";

for(let char of word){  

   if(vowel.includes(char)){ // This is check whether the word which we want to check in this varible thats why we used includes.
      console.log(char, "Vowel")
   
   }else{
      console.log("Consonent", char);
   }
}

// Reverse the string word

let strng = "Hello";
let reverse = "";

for (let i = strng.length-1; i>=0; i--){
   reverse = reverse + strng[i];
}

console.log("Reverse ", reverse);


// consonents find

let  exmple = "harshgowda";
let  vowe = "aeiouAEIOU";

for (let conso of exmple){
   if(vowe.includes(conso)){
      console.log("This is vowels", conso);
   }else{
      console.log("This is consonents",conso);
   }
}

// Large numebr in array

let numbers = [12, 45, 7, 89, 23];

let max = numbers[0];

for (let i = 0; i<numbers.length; i++){
   if(numbers[i] > max){
      max = numbers[i];
   }
}
   console.log("Large number", max);


// Module -6 Functions
// Functions Means we dont want immediately run output we want run when we click any button in that time only it will be run otherwise not run

function car(){ // function statemnet 
   console.log("This is first method to declarataion of function");
}
car(); 

let func = function(){ // function expression
   console.log("This is second function declartin method");
}

func();

let funct = ()=>{  //  fat Arrow function
   console.log("This is 3rd function declartion");
}
funct();

// parameter and Arguments

function bike(value){
   console.log(`${value} Is riding`);
}

bike("Harsh");
bike("Gnai");

function value(v1,v2){
   console.log(v1 + v2);
}

value(20, 30);

// rest function  (...) -> This is used when parameter are written but same as argument wee not wrote in that time we used rest argument.

function abcd(a,b,c,...value){
console.log("This is value get abc then rest of the value :",a,b,c,value);
}
abcd(1,2,3,4,5,6,7);

// Return question

function abc(v1, v2){
   return "harsh" + v1 + v2 ;
}

let abd = abc(" gowda ", "ujire ")
   console.log("This is function ans", abd);

// First class Function - > Functions can be traeted as a value in coding

function animal(val){
   val();
}
animal(function(){  // We created here function to print the output place of val to display
   console.log("lion");
});

// Higher order function

function pet(){
   return function(){
      console.log("Dog");
   }
}
pet()();

//pure and impure function

let a =20;

function hee(){
   console.log("This is number"); // This is pure function because it is not change anymore  
}
function maths(){
   a++; // Here the a value is changed and  output is showing 22 because increment we used in here
}

// closure 

function closure(){
   let a = 3;
   return function(){
      console.log("Closure value  ;", a);  // we return inside one more function this is called as cloasure
   }
}

// Lexical scoping - > It means we create a function inside by inside 

function ab(){
   let a =10; // This is work entire function from 618 to 625 line 
   function cd(){
      let b =20; // This is work from 619 to 625
      function ef(){
         let c =30; // This will be work 621 to 625 line 
      }
   }
}

// Immediate invoke function (IIFE)

(function mn(){
   console.log("Immedidiate call heeeeee");  // 
})(); // Immediate to call with last bracket "()" we used to run


//Hoisting 

jkl();   //We declare before write function this is called as hoisting

function jkl(){ // !Not whether we declare varible (let abcd = function jkl(code){}) we cannote call before function write we get error 
   console.log("Hoisting function declaratinon good");
}

// Create a function  inside one function


function zy(val){ 
   val();
}
zy(function(){
   console.log("Heyyyyyy");
   
})

// Write a BMI Calculator - > It means to find a person healthy or fat 

function bmi(weight,height){
 return weight / (height*height); //This is farmula to find 
}
console.log("This is value of bmi : ",bmi(70, 2.5).toFixed(3));  // here used toFixid because we want 3 digit only output so we used that 


// Reusable discount calculator High order function

function discountCalculator(discount){
   return function(price){
      return price - price * (discount/100); // this is for discount the actual price with using  10% discount
   }
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
// console.log("The discount value is =",discounter(200));

console.log("The discount value is = ", ten(500));

// To increase counter value  using closure method

function counter(){
   let count = 0;

   return function(){
      count++;
      return count;
   };
}

let g = counter();

console.log("First number = ",g());
console.log("First number = ",g());

let l = counter();
   console.log("first number in l = ", l());

// pure function to transform value

function pure(val){ // pure means we code with an inside of function we dont use any input from outside that called impure
    return val  / 30;
}

console.log("The pure value is = ",pure(70));


//iifi function 

(function(){
   const password = "secret password";
   console.log(password);
})();

// console.log(password); // We cant use out side of function password in iifi function 


// Module - 7 ->  Arrays and objects

let arr = [1,2,"harsh"];
arr[1] = 10;
console.log(arr); 

// Push method - > To push the value into array

let valuePush = [1,2,3,4];

valuePush.push(3000);

console.log(valuePush);

//Pop method - > TO remove values from array

let valuePop = [1,2,3,4];

valuePop.pop(); // To remove last value in array
// valuePop[2] = 4
console.log(valuePop);

// Shift method  -> To  remove first of array

let valueShift = [1,2,3,45];

valueShift.shift(); // This is used for remove first value in arary

console.log("Value shift =0", valueShift);

//Unshift - > This is add value in front 

let valueUnshift = [1,2,3,4];

valueUnshift.unshift();

console.log("Unshift value =", valueUnshift);

// Splice - > This is used for remove middle of the array values 

let valueSplice = [1,2,3,4,5,6];

valueSplice.splice(1,3); // In here input is index number and how ,uch value to remove after what i selected index number

console.log("Splice value",valueSplice);

// Slice ->  It will give separate values from array 

let slice = [1,2,3,4,5,6];

let newSlice = slice.slice(1,4);

console.log("Before Slice value =",slice);
console.log("After Slice value =",newSlice);

//Reverse - > TO reverse the array  values

let valueReverse = [1,2,3,4,5,6];
valueReverse.reverse();

console.log("This si reverse value", valueReverse);

//Sort -> it means sorted like assending or desending order

let valueSort = [23,29,11,35,21,40];
let sortValue = valueSort.sort(function(a,b){
   return a-b;
   
  
});

console.log("Sorted value in assending order =", sortValue);

// Foreach - > To check in array each value 

let valueFor = [1,2,3];

valueFor.forEach(function(val){
   console.log("Foreach Value = ",val + 2);
})

// Map -> 

