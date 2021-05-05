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