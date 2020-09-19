window.addEventListener("load", function () {
  const loginForm = document.querySelector(".login-form");
  const showPasswordIcon =
    loginForm && loginForm.querySelector(".show-password");
  const inputPassword =
    loginForm && loginForm.querySelector('input[type="password"');
  showPasswordIcon.addEventListener("click", function () {
    const inputPasswordType = inputPassword.getAttribute("type");
    inputPasswordType === "password"
      ? inputPassword.setAttribute("type", "text")
      : inputPassword.setAttribute("type", "password");
  });
});
function Validate() {
  var User_name = document.getElementById("account").value;
  var pass = document.getElementById("password").value;
  var check_pass = pass.length;
  if (User_name == "daotheanh" && pass=="12345678") {
    alert("Log in successfully");
  } else {
    alert("Wrong Account or Password");
  }
  if (check_pass <= 6) {
    alert("Password must have more than 6 character!!");
  }
}
