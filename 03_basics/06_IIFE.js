// TO REMOVE THE POLLUTION OF THE GLOBAL SCOPE WE USE IFFIE

(function abhi(){
    console.log("Hello Abhishek")  //in simple function
})();

// use iife in arrow function

 ( () =>{
    console.log("DB CONNECTION")
} ) ()