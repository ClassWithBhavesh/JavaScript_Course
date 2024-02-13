// // Array Methods : 

// // 1. Sort :

// var arr = ["amrit","arpit","Neha","sita","Pramod","isha"];
// document.write(arr + "<br><br>");
// arr.sort();
// document.write(arr + "<br>");

// // 2. Reverse :

// var ary = ["arpit", "sakshi", "titu", 10];
// document.write(ary +"<br><br>")
// ary.reverse();
// document.write(ary);

// // 3. Pop :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr +"<br><br>");
// arr.pop();
// document.write(arr);

// // 4. Push :

// var arr = ["arpit", "shikha", "aman", "priya"];
// arr.push("rahul","Shobha","anurag");
// document.write(arr);


// // 5. shift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// arr.shift();
// document.write(arr);

// // 6. unShift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// arr.unshift("shalini", "shobha");
// document.write(arr);

// // 7. concat :

// var a = [10,20,"Rahul"];
// document.write(a +"<br><br>");
// var b = a.concat("sanjay",10,50);
// document.write(b);


// var a = [10,20,"Rahul"];
// var b = [true, "sita", "geeta"];
// var c = a.concat(b);
// var arr = [20, 80];
// document.write(c + "<br>");
// var d = c.concat(arr);
// document.write(d);


// var a = [10,20,"Rahul"];
// var b = [true, "sita", "geeta"];
// var c = [10,20,40,5];
// var d = ["sakshi", "safal"];
// var e = a.concat(b,c,d);
// document.write(e);

// // 8. Join :

// var a = [10,50,"Rahul","shikha"];
// // var b = ["shobha", "geeta", "sita"];
// var c = a.join("");
// document.write(c);


// // 10. slice :

// var h = [10, 20, 45, 30, 40];
// document.write(h +"<br><br>");
// var b = h.slice(1, 5);
// document.write(b);

// // 11. Splice :

// var a = ["Rahul", 50, 80, 95, 60];
// document.write(a +"<br><br>");
// // var c = a.splice(index, how many delete, new value);
// a.splice(3, 1, "Aman", 10);
// document.write(a + "<br><br><br>");

// // 12. isArray : 

// var arr = [10, 50 ,40 ,"Sahil"];
// if(Array.isArray(arr)){
//     document.write("Yess, this is an array.")
// }else
// {
//     document.write("No, This not an array")
// }


// // 13. indexOf :

// var b = [10, 20, 30, 20, 45, 54, 45];
// var a = b.indexOf(45, 2);
// document.write(a);
// var a = b.indexOf(search  , start);

// // 14. lastIndexOf : 

// var g = ["Str", 30, 50, 45, 50, 45,true];
// var h = g.lastIndexOf(50); // g.lastIndexOf(seacrh item)
// document.write(h);

// // 15. Includes :

// var ary = ["Sagar", "Atul", "Sanjay"];
// var h = ary.includes("Atulan");
// document.write(h + "<br><br><br><br>");


// // 16. Some :
// var age = [10, 50, 18];
// document.write(age + "<br><br>");
// var check = age.some(ages);
// document.write(check + "<br><br>");
// function ages(age){
//     return age >= 18;;
// }

// // 17. Every : 

// var k = [20, 5, 80];
// document.write(k + "<br><br><br>");
// var y = k.every(ages);
// document.write(y);

// // 18. Find :
// var p = [10, 22, 55, 19, 50];
// document.write(p + "<br><br><br>");
// var l = p.find(ages);
// document.write(l);

// function ages(p){
//     return p >= 20;
// }

// // 19. FindIndex : 
// let q = [10, 15, 18, 50];
// document.write(q + "<br><br><br>");
// var r = q.findIndex(ages);
// document.write(r);

// function ages(q){
//     return q >= 18;
// }


// // 20. Filter :

// var a = [10,12,15,20,45,5,70];
// document.write(a + "<br><br>");
// var b = a.filter(ages);
// document.write(b + "<br>");

// function ages(a){
//     return a >= 18;
// }


// // 21. toString : 

// var t = ["Rahul", 50, 48, "Sanjeev"];
// console.log(t);
// document.write(t + "<br><br><br>")
// var str = t.toString();
// document.write(str);
// console.log(typeof(str));

// // 22. Array forEach Loop :

// let ary = ["Neha", 50, true, "Saddam"];
// ary.forEach(function(val, i){
//     document.write(i + " : " + val + "<br>");
// })
// for(let i = 0; i < ary.length; i++){
//     document.write( i + "-" + ary[i] + "<br>");
// }

// // Objects : 

// let obj = {
//     fname : "Yuvraj",
//     lname : "Singh",
//     age : 22,
//     roll1_no : 8,
//     favMovies : ["Dhoom", "FastX"],
//     salary : function(){
//         return 30000;
//     },
//     fullName : function(){
//         return this.fname + " " + this.lname;
//     }
// };

// for(let key = 0; key < Object.keys(obj).length; key++){
//     let ele = obj[Object.keys(obj)[key]];
//     let i = Object.keys(obj)[key];
//     document.write(i  + " - " + ele + "<br>");
// }
// for(let key in obj){
//     document.write(key + " - " + obj[key] + "<br>");
// }


// console.log(obj.fullName());
// document.write(obj); 


// var ob = [
//         {fname : "Harman", gender : "Male"},
//         {fname : "imran", gender : "Male"},
//         {fname : "Shalini", gender : "Female"},
//     ];

//     console.log(ob);
//     for(let i = 0; i < ob.length; i++){
//             document.write(ob[i].fname + " " + ob[i].gender + "<br>");
//         }



// // Traditional For Loop for Object :


// // forin Loop : 

// for(key in obj){
//     document.write(key + " - " + obj[key] + "<br>");
// }



















// Array Methods :

// 1. sort() :
// arr.sort();
// document.write(arr + "<br>");

// 2. reverse() :
// arr.reverse();
// document.write(arr + "<br>");

// 3. pop() : 
// arr.pop();
// document.write(arr + "<br>");

// 4. push() :
// arr.push("Avani", "JavaScript");
// document.write(arr + "<br>");

// 5. shift() :
// arr.shift();
// document.write(arr + "<br>");

// 6. unshift() :
// arr.unshift("Bhavesh");
// document.write(arr + "<br>");

// 7. concat() :
// let a = [10,20,30];
// document.write(a + "<br>");
// let b = [40,50,60];
// document.write(b + "<br>");
// let c = a.concat(b);
// document.write(c + "<br>");

// 8. join() :
// let d = c.join('-');
// document.write(d);

// 9. slice() :
// let arr = ["bhavesh", "amit", "vivek", "Shivam", "Pawan", "Avani"];
// document.write(arr + "<br>");
// let b = arr.slice(1, 4);
// document.write(b + "<br>");

// 10 splice() :
// let arr = ["bhavesh", "amit", "vivek", "Shivam", "Pawan", "Avani"];
// document.write(arr + "<br>");
// arr.splice(2, 2, "JavaScript", "Java");
// document.write(arr + "<br>");

// 11. isArray() :
// let arr = ["bhavesh", "amit", "vivek", "Shivam", "Pawan", "Avani"];
// document.write(arr + "<br>");
// if(Array.isArray(arr)){
//     document.write("'arr' is an array.");
// }
// else{
//     document.write("'arr' is not a array.");
// }

// 12. indexOf() :
// let arr = ["bhavesh", "amit", "Mohit", "Shivam", "vivek", "Sagar", "Shivam", "Amit", "Pawan", "Avani"];
// let a = arr.indexOf("amit", 0);
// document.write(a);

// 13. lastIndexOf :
// let b = arr.lastIndexOf("Shivam");
// document.write(b);

// 14. some() : 
// let arr = [10,20,30,12,15,80];
// document.write(arr + "<br>");
// let a = arr.some(ages);
// document.write(a);

// function ages(ary){
//     return ary >= 18;
// }

// 15. every() : 
// let ary = [100,20,30,120,150,80];
// document.write(ary + "<br>");
// let b = ary.every(ages);
// document.write(b);

// 16. filter() :
// let ary = [10,2,30,12,15,80];
// document.write(ary + "<br>");
// let arr = ary.filter(ages);
// document.write(arr);

// 17. find() :
// let ary = [10,2,30,12,15,80];
// document.write(ary + "<br>");
// let arr = ary.find(ages);
// document.write(arr);

// 18. findIndex() :
// let ary = [10,15,2,30,12,15,80];
// document.write(ary + "<br>");
// let arr = ary.findIndex(ages);
// document.write(arr);

// 19. includes() :
// let ary = [10,15,2,30,12,15,80];
// document.write(ary + "<br>");
// let arr = ary.includes(15);
// document.write(arr);

// 20. toString() :
// let ary = [10,15,2,30,12,15,80];
// document.write(ary + "<br>");
// document.write(typeof(ary) + "<br>");
// document.write(Array.isArray(ary) + "<br>");
// let arr = ary.toString();
// document.write(arr + "<br>");
// document.write(Array.isArray(arr) + "<br>");
// document.write(typeof(arr));

// 21. forEach() :
// let arrraaa = [10,50,30,890,88]; 
// arrraaa.forEach(function(value, index){
//     document.write(index + value + "<br>");
// })

// for(let i = 0; i < arrraaa.length; i++){
//     document.write(i + " - " + arrraaa[i] + "<br>");
// }


// 22. map() :
// let arr = [10,20,30];
// let ary = arr.map(function(val){
//     return val + 20;
// });
// document.write(arr + "<br>");
// document.write(ary + "<br>");
// Object :
// let obj = {
//     fname : "Pawan",                
//     lname : "Singh",
//     age : 21,
//     favMovies : ["Gadar", "The Nun", "Conjuring", "Annabelle"],
//     obj1 : {
//         book1 : "The Cantreville Ghost",
//         book2 : "Rich Dad, Poor Dad",
//         book3 : "The Psychology of Money"
//     },
//     fullName : function(){
//         return this.fname + " " + this.lname;
//     }
// }
// document.write(obj.fullName());
// document.write("He is" + " " +  obj.fname + " " + obj.lname + " and he is " + obj.age);

// Modern for loop :
// for(let key in obj){
//     document.write(key + " : " + obj[key] + "<br>");
// }

// Traditional For loop :
// for(let key = 0; key < Object.keys(obj).length; key++){
//     document.write(Object.keys(obj)[key] + " - " + obj[Object.keys(obj)[key]] + "<br>");
// }

// console.log(emp);
// document.write(emp);



// --> map method using Arrays of Object :
// function fullname(x){
//     return x.fname + " " + x.lname;
// }
// let ar = [
//     {fname : "pawan", lname : "Singh"},
//     {fname : "Vivek", lname : "Vyas"},
//     {fname : "Shivam", lname : "Chouhan"}
// ];
// let ab = ar.map(fullname);
// document.write("[ " + ab + " ]");

// 23. reduce() :
// let arr = [4,0,3,1];
// let ar = arr.reduce(val);
// document.write(ar);

// function val(x1, x2){
//     return x1 ** x2;
// }
