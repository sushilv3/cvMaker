function addNewWorkEField(){
    console.log("adding new field");
   
    let newNode=document.createElement('textarea');
   
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
   
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let weObj = document.getElementById("we");
    let weAddbtnObj = document.getElementById("weAddBtn");

    weObj.insertBefore(newNode,weAddbtnObj);
}

function addNewAqField(){
    console.log("add new Qualification field");
   
    let newAqNode = document.createElement("textarea");
   
    newAqNode.classList.add("form-control");
    newAqNode.classList.add("aqField");
    newAqNode.classList.add("mt-2");

    newAqNode.setAttribute("rows",3);
    newAqNode.setAttribute("placeholder","Enter here");

    let aqObj = document.getElementById("aq");
    let aqAddBtnObj = document.getElementById("aqAddBtn");

    aqObj.insertBefore(newAqNode,aqAddBtnObj);

}

// generating cv

function generateCV(){
    // console.log("generate cv function called");

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
   
    // second way
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value
    
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("insT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
   
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

//   WE

let wes = document.getElementsByClassName("weField");

let str = '';

for (let e of wes){
    str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

//aq

let aqs = document.getElementsByClassName("aqField");

let str1 = '';

for (let e of aqs){
    str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

// print cv

function printCV(){
    window.print();
}

