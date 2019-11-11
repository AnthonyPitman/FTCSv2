//---------Globals------------------------------
 var logoff = document.getElementById('lb2');
 var logon = document.getElementById('lb1');
 var biglogon = document.getElementById('lbb3');
 var userBox = document.getElementById('tb1');
 var passBox = document.getElementById('pw1');
 var hidDiv = document.getElementById("hide");
 //--------------------------------------------
 //---Global State Objects---------------------
 var userLogon = {
  loggedin: false,
  loggedout: true,
  type: "guest",
  id: 0,
  userName: "#",
};
var administrator = {
  userName: "testAdmin",
  password: "test",
  type : "admin",
  id: 990,
};
//----------------------------------------------
function toggle_visibility(){
  if (userLogon.loggedin == true && userLogon.loggedout == false)
  {
    biglogon.style.display = "none";
    logoff.style.visibility = "visible";
    logoff.style.display = "inline";
    logoff.hidden = false;
    logon.style.visibility = "hidden";
    userBox.style.visibility = "hidden";
    passBox.style.visibility = "hidden";
    alert(logoff.style.visibility);
  }
  if (userLogon.loggedin == false && userLogon.loggedout == true)
  {
    biglogon.style.display = "inline";
    logoff.style.visibility = "hidden";
    logoff.style.display = "inline";
    logoff.hidden = false;
    logon.style.visibility = "visible";
    userBox.style.visibility = "visible";
    passBox.style.visibility = "visible";
    alert(logoff.style.visibility);
  }
  if (userLogon.loggedin == true && userLogon.loggedout == true)
  {
    alert(logoff.style.visibility);
  }
  alert(userLogon.loggedin);
  alert(userLogon.loggedout);
}





      function start() {
        toggle_visibility();
        show_hide();

      }
      function show_hide() {
        //var selector = document.getElementById('id_of_select');
        //var value1 = selector[selector.selectedIndex].value;



        if(hidDiv.style.display === "none")
        {
            hidDiv.style.display = "block";
        }
        else
        {
            hidDiv.style.display = "none";
        }
        //document.getElementById('display').innerHTML = value;
      }
      function log_out() {
        userLogon.loggedin = false;
        userLogon.loggedout = true;
        userLogon.type = "guest";
        userLogon.id = 0;
        userLogon.userName = "#";

        document.getElementById('l1').innerHTML = userLogon.type;
        document.getElementById('l2').innerHTML = "loggedout";
        toggle_visibility();

      }
      function modify() {

        var value2 = userBox.value;
        var value3 = passBox.value;
        var type2 = userLogon.type;
        var loginstate2 = "loggedout";

        if (value2 == administrator.userName && value3 == administrator.password)
        {
          type2 = administrator.type;
          userLogon.type = type2;
          userLogon.loggedin = true;
          userLogon.loggedout = false;
          userLogon.userName = administrator.userName;
          userLogon.password = administrator.password;

          loginstate2 = "loggedin";
          show_hide();
        }

        document.getElementById('l1').innerHTML = userLogon.type;
        document.getElementById('l2').innerHTML = loginstate2;
        toggle_visibility();
        //alert(document.getElementById('l1').innerHTML.value);



      }