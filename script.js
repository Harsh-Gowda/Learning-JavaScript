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
   if(i%2 === 0) {
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
  
      console.log(`5* ${i} = ${5*i}`); // to print full format we used dynamic pattern $ using 
   
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

/// Enter number and check odd or even

let val = prompt("Enetr a number"); // Prompt used like to input field

for (let i =0; i<= val; i++){
   if (i%2 === 0){
      console.log(`${i} is even`);
   } else {
      console.log (`${i} is odd`);
   }
}