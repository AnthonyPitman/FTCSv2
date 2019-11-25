
function xmlRead(url){
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
        var txt = xmlhttp.responseText;
        return txt;
    }   
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function cloneComponent(divID, url){
    var shadow = document.querySelector('#'+divID).createShadowRoot();
    //var shade = this.attachShadow({mode:open});
    document.getElementById(divID).innerHTML = xmlRead(url);    
}
function preLoader(){
    var load = "facultyRosterReport.html,gaRosterReport.html,facultyReport.html,name.html,class.html";
    var loaded = load.split(",");
    //var each1 = "";
    var i2 = 1;
    for (var i = 0; i < loaded.length; i++) {
        cloneComponent("report"+i2, loaded[i]);
        alert(loaded[i]);
        i2++;
    }
    
    cloneComponent("welcome", "welcome.html");
}
function activeReport(id){
    var load = "facultyRosterReport.html,gaRosterReport.html,facultyReport.html,name.html,class.html";
    var loaded = load.split(",");
    //var each1 = "";
    var i2 = 1;
    for(var i = 0; i < loaded.length; i++){
        inactiveReport("report"+i2);
        i2++;
    }
    inactiveReport("welcome");
    document.getElementById(id).setAttribute("style", "zvalue:10");
}
function inactiveReport(id){
    
    document.getElementById(id).setAttribute("style", "z-value:"+getRandomInt(0, 7));
}
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}