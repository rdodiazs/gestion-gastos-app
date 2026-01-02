
const loginBtn = document.querySelector(".login-click"),
      signupBtn = document.querySelector(".signup-click"),
      loginContainer = document.querySelector(".login-body"),
      signupContainer = document.querySelector(".crear-cuenta-body");

signupBtn.addEventListener("click", () => {
    loginContainer.classList.add("login-inactivo");
    signupContainer.classList.add("signup-activo");
});

loginBtn.addEventListener("click", () => {
    loginContainer.classList.remove("login-inactivo");
    signupContainer.classList.remove("signup-activo");
});
