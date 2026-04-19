const {add} require("./app.js");

if(add(2,3)!==5){
    throw new Error("Test Failed");
}

console.log("Test passed!");
