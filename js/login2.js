
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

var dean = {
  userName: "testDean",
  password: "test",
  type : "dean",
  id: 880,
};

var officer = {
  userName: "testDean",
  password: "test",
  type : "officer",
  id: 770,
};



      function log_out() {
        userLogon.loggedin = false;
        userLogon.loggedout = true;
        userLogon.type = "guest";
        userLogon.id = 0;
        userLogon.userName = "#";
        document.getElementById('tasksfill').innerHTML = "";
}
function taskfill() {
    tasks = document.getElementById("tasksfill");
    tasks.innerHTML = "";
    alert("taskfill called");
    if (userLogon.type == administrator.type) {
        alert("secondary verification successful");
        var template = document.getElementById("adminMenu");
        var templateContent = template.content;
        tasks.appendChild(templateContent);
        
    }

    if (userLogon.type == dean.type) {
        alert("second verification successful");
        var template1 = document.getElementById("deanMenu");
        var templateContent1 = template1.content;
        tasks.appendChild(templateContent1);
        
    }
    if (userLogon.type == officer.type) {
        alert("second verification successful");
        var template2 = document.getElementById("officerMenu");
        var templateContent2 = template2.content;
        tasks.appendChild(templateContent2);
    }
}
      function modify() {
          var value2, value3, type2, loginstate2;
          value2 = document.getElementById("text1").value;
          value3 = document.getElementById("pass1").value;
          type2 = userLogon.type;
          loginstate2 = "loggedout";
          alert("modify was called");
          if (value2 == administrator.userName && value3 == administrator.password) {
              alert("verification succeeded");
              type2 = administrator.type;
              userLogon.type = type2;
              userLogon.loggedin = true;
              userLogon.loggedout = false;
              userLogon.userName = administrator.userName;
              userLogon.password = administrator.password;

              loginstate2 = "loggedin";
              taskfill();

          }
          else {
              if (value2 != dean.userName && value2 != officer.userName) {
                alert("Incorrect Login Information.");
            }
          }
          if (value2 == dean.userName && value3 == dean.password) {
              type2 = dean.type;
              userLogon.type = type2;
              userLogon.loggedin = true;
              userLogon.loggedout = false;
              userLogon.userName = dean.userName;
              userLogon.password = dean.password;

              loginstate2 = "loggedin";
              taskfill();

          }
          if (value2 == officer.userName && value3 == officer.password) {
              type2 = officer.type;
              userLogon.type = type2;
              userLogon.loggedin = true;
              userLogon.loggedout = false;
              userLogon.userName = officer.userName;
              userLogon.password = officer.password;

              loginstate2 = "loggedin";
              taskfill();

          }

        



      }