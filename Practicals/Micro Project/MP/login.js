let uname = document.getElementById("username");
let pwd = document.getElementById("pass");
let msg = document.querySelector(".p2");
let btn = document.querySelector(".b1");
let msg1 = document.querySelector(".u_msg");
let nav = document.querySelector(".navbar-brand");
let close = document.querySelector(".close");
let log = document.querySelector(".login1");
function show() {
  let shwPwd = document.getElementById("pass");
  let eye = document.querySelector(".showP");
  if (shwPwd.type === "password") {
    shwPwd.type = "text";
    eye.innerText = "";
  } else {
    shwPwd.type = "password";
    eye.innerText = "";
  }
}
btn.addEventListener("click", function () {
  if (uname.value === "" || pwd.value === "") {
    msg1.innerText = "Please Enter Username & Password";
    msg1.style.color = "	#FFD700"
    msg.innerText = "";
  } else if (uname.value === "ab" && pwd.value === "ab01") {
    msg.innerText = "Login successful";
    msg.style.color = "rgb(72,255,0)";
    msg1.innerText = "";
    window.location.href = "frame.html"
  } else {
    msg.innerText = "Please enter correct username & password!!";
    msg.style.color = "#da3400";
    msg1.innerText = "";
  }
});
log.onclick = function () {
  document.querySelector(".logincontainer").style.display = "grid"
  document.querySelector(".iphone").style.opacity = "50%"
}
close.onclick = function () {
  document.querySelector(".logincontainer").style.display = "none"
  document.querySelector(".iphone").style.opacity = "10"
}