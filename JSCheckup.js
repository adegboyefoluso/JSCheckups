let firstName= "foluso";
let lastName=   "Adegboye";
let age=    45;
let IsofAge=true;
let dateOfBirth= "08/01/1974";
console.log(`"My Fisrt Name is ${firstName} and my LastName is ${lastName}, Born on : ${dateOfBirth} , is it true that my age is ${age}?"`);

function MyAGe(firstName,lastName, age){
    let myAge =18;
    if(age>=myAge){
        console.log(`"Hurray! ${firstName} ${lastName} is no more a kid"`)
    }
    else{
        console.log(`"O'boy you are still a kid, ${firstName}!! you still need to grow up . If yopu dont know you need to be above ${myAge} before yoiu can do this.Sorry!"`)
    }
   // return  console.log("Hello");

}

//MyAGe(firstName,lastName ,age);
MyAGe("Ayo","Agun",41);
MyAGe("Tope","Ariyo",17);