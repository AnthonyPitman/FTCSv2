//---------Globals------------------------------
//var logoff = document.getElementById('lb2');
//var logon = document.getElementById('lb1');
//var biglogon = document.getElementById('lbb3');
//var userBox = document.getElementById('text1');
//var passBox = document.getElementById('pass1');
//var hidDiv = document.getElementById("hide");
//--------------------------------------------
//---Global State Objects---------------------
//college = "CBAT";
//dept = "Computing";
var proxySet = "none";
var proxyUser = "gtg";
var proxyUsers = [];
var acadIndex = 0; //global index academics
var proIndex = 0;  //global index professionals
var proxyIndex = 0; //global index proxyUsers

var collegeDean = {
    college: "CBAT",
    dean: "Tony Pittarese"
};
var deptChair = {
    dept: "Computing",
    chair: "Brian Bennett"
};

var academic = {
    name: "Joe Doe",
    dept: "Digital Media",
    college: "College of Fine Arts - Digital Arts - 1999",
    level: "PhD",
    fileURL: "file:///C:/JoeDoe1999transcript.txt"
};
var professional = {
    name: "John Dunn",
    dept: "Computing",
    company: "Bristol Motor City Data Entry - Data Entry Professional - 5 years",
    classesA: "Computer Data Entry - Course Section TBA",
    fileURL: "file:///C:/motorcitydunnresume2018.txt"
};
var academics = [];
var professionals = [];
//var faculties = [];
var collegeDeans = [];
var deptChairs = [];
//----------------------------------------------
/*
function toggle_visibility() {
    if (userLogon.loggedin === true && userLogon.loggedout === false) {
        biglogon.style.display = "none";
        logoff.style.visibility = "visible";
        logoff.style.display = "inline";
        logoff.hidden = false;
        logon.style.visibility = "hidden";
        userBox.style.visibility = "hidden";
        passBox.style.visibility = "hidden";

    }
    if (userLogon.loggedin === false && userLogon.loggedout === true) {
        biglogon.style.display = "inline";
        logoff.style.visibility = "hidden";
        logoff.style.display = "inline";
        logoff.hidden = false;
        logon.style.visibility = "visible";
        userBox.style.visibility = "visible";
        passBox.style.visibility = "visible";

    }
    if (userLogon.loggedin === true && userLogon.loggedout === true) {
        alert("Illegal state: loggedin and loggedout");
    }

}
*/
/*
function show_hide() {
    //var selector = document.getElementById('id_of_select');
    //var value1 = selector[selector.selectedIndex].value;



    if (hidDiv.style.display === "none") {
        hidDiv.style.display = "block";
    } else {
        hidDiv.style.display = "none";
    }
    //document.getElementById('display').innerHTML = value;
}
*/
/*
function start() {
    toggle_visibility();
    show_hide();

}
*/
function log_out() {
    userLogon.loggedin = false;
    userLogon.loggedout = true;
    userLogon.type = "guest";
    userLogon.id = 0;
    userLogon.userName = "#";

    

    
   

}

function modify2() {
    

    //document.getElementById('l1').innerHTML = userLogon.type;
    //document.getElementById('l2').innerHTML = loginstate2;
    //toggle_visibility();





}

function change_src(n) {
    var url = [
        "facultyRosterReport.html",
        "gaRosterReport.html",
        "facultyReport.html",
        "name.html",
        "#dept",
        "class.html"
    ];
    document.getElementById("isrc").setAttribute("src", url[n]);
    alert(url[n]);
}
//------Choosers--------------------
function chooser(id, choice2) {
    var inner = document.getElementBy("" + id + choice2).innerHTML;
    return inner;
}
function collegeChosen(choice1) {
    //ccd
    collegeDean.college = chooser("ccd", choice1);
}
function deptChosen(choice3) {
    //deptdd
    deptChair.dept = chooser("deptdd", choice3);
}
function proxyChosen(choice4) {
    //pdd
    proxySet = chooser("ppd", choice4);
}
function setChair(choice5) {
    //cdd
    deptChair.chair = chooser("cdd", choice5);
}
function setDean(choice6) {
    //ddd
    collegeDean.dean = chooser("ddd", choice6);
}
//----Add----------------
function getInput(id9) {
    return document.getElementById(id9).value;
}
function addAcademic(num) {
    academic.name = getInput("tbFName" + num);
    academic.dept = getInput("tbDept" + num);
    academic.college = getInput("tbCollege" + num);
    academic.level = getInput("tbCLevel" + num);
    academic.fileURL = getInput("tbTranscript" + num);
    academics.push(academic);
    alert(academic.name + " has been added.");
}
function addProfessional(num2) {
    professional.name = getInput("tbFName" + num2);
    professional.dept = getInput("tbDept" + num2);
    professional.company = getInput("tbCompany" + num2);
    professional.classesA = getInput("tbClasses" + num2);
    professional.fileURL = getInput("tbResume" + num2);
    professionals.push(professional);
    alert(professional.name + " has been added.");
}
function proxyAdd() {
    proxyUser = getInput("tbAdd");
    proxyUsers.push(proxyUser);
}
//------Prefills------
function additemSelect(divId, idSeed, innerValue, clickFunction, index1) {

    var createA = document.createElement("A");
    createA.setAttribute("class", "dropdown-item");
    createA.setAttribute("id", "" + idSeed + index1);
    createA.setAttribute("href", "#");
    createA.setAttribute("onclick", clickFunction);
    createA.textContent = innerValue;
    document.getElementById(divId).appendChild(createA);

}
function setInput(id8, innerValue2) {
    document.getElementById(id8).setAttribute("value", innerValue2);
}
function nixProxyIndex(index5) {
    proxyIndex = index5;
}
function prefillProxy() {
    var k;
    for (k = 0; k < proxyUsers.length; k++) {
        additemSelect("nixSelect", "nixUser", proxyUsers[k], "nixProxyIndex(" + k + ")", k);
    }
}
function prefillAcademic(num4) {
    var j;
    var n;
    if (num4 === 1) {
        //selection div for submenu 2
        for (j = 0; j < academics.length; j++) {
            additemSelect("acadlist1", "ac", academics[j].name, "acadChosen(1, " + j + ")", j);
        }
    } else {
        //selection div for submenu 1
        for (n = 0; n < academics.length; n++) {
            additemSelect("acadlist2", "acl", academics[n].name, "proChosen(1, " + n + ")", n);
        }
    }
}
function prefillProfessional(num5) {
    var l;
    var m;
    if (num5 === 1) {
        //selection div for submenu 1
        for (l = 0; l < professionals.length; l++) {
            additemSelect("prolist1", "pl", professionals[l].name, "proChosen(1, " + l + ")", l);
        }
    } else {
        //selection div for submenu 2
        for (m = 0; m < professionals.length; m++) {
            additemSelect("prolist2", "pl", professionals[m].name, "proChosen(2, " + m + ")", m);
        }
    }
}
function proChosen(num7, index7) {
    proIndex = index7;
    if (num7 === 1) {
        setInput("tbDept5", professionals[proIndex].dept);
        setInput("tbCompany5", professionals[proIndex].company);
        setInput("tbClasses5", professionals[proIndex].classesA);
        setInput("tbResume5", professionals[proIndex].fileURL);
    } else {
        setInput("tbDept4", professionals[proIndex].dept);
        setInput("tbCompany4", professionals[proIndex].company);
        setInput("tbClasses4", professionals[proIndex].classesA);
        setInput("tbResume4", professionals[proIndex].fileURL);
    }
}
function acadChosen(num6, index6) {
    acadIndex = index6;
    if (num6 === 1) {
        setInput("tbDept8", academics[acadIndex].dept);
        setInput("tbCollege8", academics[acadIndex].college);
        setInput("tbCLevel8", academics[proIndex].level);
        setInput("tbTranscript8", academics[proIndex].fileURL);
    } else {
        setInput("tbDept3", academics[acadIndex].dept);
        setInput("tbCollege3", academics[acadIndex].college);
        setInput("tbCLevel3", academics[acadIndex].level);
        setInput("tbTranscript3", academics[acadIndex].fileURL);
    }
}
function editProfessional(num7) {
    if (confirm("Are you sure you wish to alter " + professionals[proIndex].name + "'s information?")) {
        if (num7 === 1) {
            professionals[proIndex].dept = getInput("tbDept5");
            professionals[proIndex].company = getInput("tbCompany5");
            professionals[proIndex].classesA = getInput("tbClasses5");
            professionals[proIndex].fileURL = getInput("tbResume5");
        } else {
            professionals[proIndex].dept = getInput("tbDept4");
            professionals[proIndex].company = getInput("tbCompany4");
            professionals[proIndex].classesA = getInput("tbClasses4");
            professionals[proIndex].fileURL = getInput("tbResume4");
        }
            
    }
}
    function editAcademic(num6) {
        if (confirm("Are you sure you wish to alter " + academics[acadIndex].name + "'s information?")) {
            if (num6 === 1) {
                academics[acadIndex].dept = getInput("tbDept8");
                academics[acadIndex].college = getInput("tbCollege8");
                academics[proIndex].level = getInput("tbCLevel8");
                academics[proIndex].fileURL = getInput("tbTranscript8");
            } else {
                academics[acadIndex].dept = getInput("tbDept3");
                academics[acadIndex].college = getInput("tbCollege3");
                academics[acadIndex].level = getInput("tbCLevel3");
                academics[acadIndex].fileURL = getInput("tbTranscript3");
            }
        }

    }
    //----Remove------
    function proxyRemove() {
        proxyUsers(proxyIndex, 1);
        document.getElementById("nixSelect").innerHTML = "";
}
function alarm() {
    alert("this works");
}
function filler() {
    userLogon.type = administrator.type;
    taskfill();
}