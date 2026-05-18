// Citiigroup auth system

const validCredentials = {
  username: "Henry Nguyen",
  password: "Nguyen1990"
};

// login
const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("msg");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      localStorage.setItem("loggedIn", "true");
      msg.style.color = "green";
      msg.innerText = "Login successful... redirecting";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);

    } else {
      msg.style.color = "red";
      msg.innerText = "Invalid credentials";
    }
  });
}

// logout (dashboard)
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  });
}

// protect dashboard page
window.addEventListener("load", () => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn && window.location.pathname.includes("dashboard")) {
    window.location.href = "index.html";
  }
});
