function localWrite() {
   localStorage.setItem("userRole", "guest");
   localStorage.setItem("loggedIn", "NO"); //all caps is the way to go here! Full YES and full NO
   localStorage.setItem("userName", "guest");
   localStorage.setItem("pass", "#");
}
function localLogon(role, user){
    localStorage.setItem("userRole", role);
    localStorage.setItem("loggedIn", "YES");
    localStorage.setItem("userName", user);
}
function localLogoff() {
    localStorage.removeItem("pass");
    localStorage.setItem("userRole", "guest");
    localStorage.setItem("userName", "guest")
    localStorage.setItem("loggedIn", "NO");
    
    //localStorage.setItem("loggedIn", "NO");
    //localStorage.clear();
    //localStorage.removeItem("pass");
}
function testLogon() {
   alert("Role: " + localStorage.userRole);
   alert("UserName: "+ localStorage.userName);
   alert("Logged In: " + localStorage.loggedIn);
}