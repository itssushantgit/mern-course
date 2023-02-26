// switch case
const key=4
switch (key) {
    case 1:
        console.log("sunday")
        
        break;
           case 2:
        console.log("monday")
        
        break;
           case 3:
        console.log("tuesday")
        
        break;

    default:
        console.log("invalid day")
        break;
}
// ternary operatorno
const a=5;
console.log( a==5? "yes":"no")
// for loop
for (let i = 0; i< 10 ; i++) {
    console.log(i);

}
// array
const arrayvalue= ["arjun",1,"rahul"];
const array2=[];
console.log(arrayvalue[0]);
for(let i=0;i<arrayvalue.length;i++){
    console.log(arrayvalue[i]);
}
// }
arrayvalue.forEach(element,i) => {
    console.log(element,i);
};
// while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}
// object
const person={
    name:"sushant",
    address:"ktm",
    getAddress:function(){
        return "ktm" ;

    }

}
console.log(
    person["address"],
    person.name,
    person.address,
    person.getAddress()
);


