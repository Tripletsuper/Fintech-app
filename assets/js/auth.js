// Citiigroup auth system (fixed version)

const validCredentials = {
  username: "Henry Nguyen",
  password: "Nguyen1990"
};

// elements
const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("msg");

// login handler
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      // save session
      localStorage.setItem("loggedIn", "true");

      if (msg) msg.innerText = "Login successful...";

      // redirect to dashboard
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 800);

    } else {
      if (msg) msg.innerText = "Invalid username or password";
    }
  });
}

// protect dashboard
function checkAuth() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// logout
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
