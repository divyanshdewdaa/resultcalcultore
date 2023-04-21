var roll=undefined;
var Name=undefined;
var Maths=undefined;
var Chemistry=undefined;
var Hindi=undefined;
var English=undefined;
var Physics=undefined;
var tbody=undefined;

function init(){
    roll=document.getElementById("roll");
    Name=document.getElementById("Name");
    Maths=document.getElementById("Maths");
    Chemistry=document.getElementById("Chemistry");
    Hindi=document.getElementById("Hindi");
    English=document.getElementById("English");
    Physics=document.getElementById("Physics");
    tbody=document.getElementById("tbody");
    
}
function process(){
    var vroll=roll.value;
    var vName=Name.value;
    var vMaths=+Maths.value;
    var vChemistry=+Chemistry.value;
    var vHindi=+Hindi.value;
    var vEnglish=+English.value;
    var vPhysics=+Physics.value;

    
    if(vroll == "" || vName == "" ||  vMaths == "" || vChemistry == "" || vHindi == "" || vEnglish == "" || vPhysics == "" ) {
        alert("Please fill the fields with valid data!");
        return;
    }

    if(  vMaths >= 101 || vChemistry >= 101 || vHindi >= 101 || vEnglish >= 101 || vPhysics >= 101){
        alert("Please fill the fields with valid Marks!");
        return;
    }

        var stdobj={vroll,vName,vChemistry,vEnglish,vHindi,vMaths,vPhysics};
    add2table(stdobj);
    

    
}

function add2table(obj){

    var tr=document.createElement("tr");
    
    var td1=document.createElement("td");
    td1.innerText=obj.vroll;
    tr.appendChild(td1);

    var td2=document.createElement("td");
    td2.innerText=obj.vName;
    tr.appendChild(td2);

    var td3=document.createElement("td");
    td3.innerText=obj.vMaths;
    tr.appendChild(td3);

    var td4=document.createElement("td");
    td4.innerText=obj.vHindi;
    tr.appendChild(td4);

    var td5=document.createElement("td");
    td5.innerText=obj.vEnglish;
    tr.appendChild(td5);

    var td6=document.createElement("td");
    td6.innerText=obj.vPhysics;
    tr.appendChild(td6);

    var td7=document.createElement("td");
    td7.innerText=obj.vChemistry;
    tr.appendChild(td7);

    

    var td8=document.createElement("td");
    var total=obj.vMaths+obj.vChemistry+obj.vEnglish+obj.vHindi+obj.vPhysics;
    td8.innerText=total;
    tr.appendChild(td8);

    var td9=document.createElement("td");
    var Percentage=(obj.vMaths+obj.vChemistry+obj.vEnglish+obj.vHindi+obj.vPhysics)/5;
    td9.innerText=Percentage;
    tr.appendChild(td9);
    
    if(  obj.vMaths <= 32 || obj.vChemistry <= 32 || obj.vHindi <= 32 || obj.vEnglish <= 32 || obj.vPhysics <= 32
        ){
        var a="FAIL";
    }
    else if(Percentage>=33 && Percentage<=100  ){
        var a="PASS";
    }
    else{
       var  a="FAIL";
    }

    var td10=document.createElement("td");
    var Result=a;
    td10.innerText=Result;
    tr.appendChild(td10);
    

    tbody.appendChild(tr);


}
