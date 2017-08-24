"use strict";



let carArray = [];
let makeCar = function (name,model,reg,value){ return {nm: name,mod: model,rg: reg,vl: value}; };


function checkIn(){
    let car = makeCar(getName(),getModel(),getReg(),getValue());
    let paragraph =  document.createElement('p');

    carArray.push(car);

    print(carArray);
    paragraph.innerHTML = "[ "+getName() + " | " + getModel() + " | " + getReg() + " ] Has been checked in <br>";
    document.getElementsByTagName('body')[0].appendChild(paragraph);    
}
function checkOut(){
    let regTwo = document.getElementById('regTwo').value;
    let paragraph =  document.createElement('p');
    let store = "";
    for (let i = 0; i < carArray.length; i++) {
        if (carArray[i].rg === regTwo){ 
            store = "[ " + carArray[i].nm + " | " + carArray[i].mod + " | " + carArray[i].rg + " ] Has been checked out ";            
            carArray.splice(i,1);
        }
    }
    print(carArray);
    paragraph.innerHTML = store;
    document.getElementsByTagName('body')[0].appendChild(paragraph);

}

function checkOutAll(){
    carArray.splice(0,carArray.length);
    print(carArray);    
}

function outputGarage(){
    let paragraph =  document.createElement('p');
    let store = "<h3> In Garage </h3>";
    for (let i = 0 ; i < carArray.length; i++){
        store += "[ "+carArray[i].nm + " | " + carArray[i].mod + " | " + carArray[i].rg + " ]<br>";
    }
    paragraph.innerHTML = store;
    document.getElementsByTagName('body')[0].appendChild(paragraph);

}
function  calculateBill(){
    let regTwo = document.getElementById('regTwo').value;    
    let paragraph =  document.createElement('p');
    let store = "<h3> Bill To Fix </h3>";
    for (let i = 0; i < carArray.length; i++) {
        if (carArray[i].rg === regTwo){ 
            store += "[ " + carArray[i].nm + " | " + carArray[i].mod + " | " + carArray[i].rg + " ]<br> " + "Will Cost :  £" + (carArray[i].vl * 0.5);            
        }
    }

    paragraph.innerHTML = store;
    document.getElementsByTagName('body')[0].appendChild(paragraph);
}
//----Functions to grab data
function getName(){return document.getElementById('name').value;}
function getModel(){return document.getElementById('model').value;}
function getReg(){return document.getElementById('reg').value;}
function getValue(){return document.getElementById('val').value;}

//---Extra useful functions 
function refresh(){
    location.reload();
}
function print(x){
    console.log(x);
}
/*function lengthOfObjArray(obj) {
    let c = 0;
    obj.forEach(function(element) { c++; });
    return c;
}*/