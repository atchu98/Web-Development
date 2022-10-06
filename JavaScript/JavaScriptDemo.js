// JavaScript source code

    function ChangeStyle(obj, oldStyle, newStyle) {
        obj.classList.remove(oldStyle);
            obj.classList.add(newStyle);
    }
        function SayHello() {
        window.alert("Hello There");
            document.getElementById("greeting").innerHTML="Good Morning";
            console.log("Hi Everyone!");
        }
function TakeNameProvideName() {
    var name = window.prompt("Enter your Name");
    alert("Your name is"+name)
}

class Person {
    constructor (fName, lName, age){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.address = "5 Main Street";
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
function AddALine(obj) {
    var para = document.createElement("p");
    var textNode = document.createTextNode("Hey judy");
    para.appendChild(textNode);
    obj.appendChild(para);

}

function DeleteLastLine(obj) {
    var elements = obj.getElementsByTagName('p');
    if (elements.lemgth > 0) {
        obj.removeChild(elements[elements.lemgth - 1]);
    }
}