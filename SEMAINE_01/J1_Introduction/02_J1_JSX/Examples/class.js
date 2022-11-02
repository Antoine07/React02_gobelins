"use strict";

function Hello(name){
    this.name = name;
    console.log(this.name);
}

new Hello("Alan");

// qu'est ce qui se passe Mal appelé
Hello("Alice"); 