// console.log("hello world");
// document.getElementById("playground").innerHTML = "<h2>Hello World</h2>";

import instructors from "./seedData.js";

window.onload = () => {
    const helloInstructors = instructors.map(instructor => `<h2>Hello ${instructor}</h2>`);
    document.getElementById("playground").innerHTML = helloInstructors.join("");
    
    document.getElementById("click-me").addEventListener("click", ev => {
        // manipulating the browser
        // window.alert("About to open a new window");
        // window.open("https://www.appacademy.io/");
    
        // manipulating the document
        document.getElementById("playground").style.color = "red";
    });
}