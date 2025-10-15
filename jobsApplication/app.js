// app.js

// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("✅ Signup successful!");
        window.location.href = "home.html";
      })
      .catch((error) => {
        alert("❌ " + error.message);
      });
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("✅ Login successful!");
        window.location.href = "home.html";
      })
      .catch((error) => {
        alert("❌ " + error.message);
      });
  });
}

// LOGOUT (for home page)
function logout() {
  auth.signOut()
    .then(() => {
      alert("You have logged out.");
      window.location.href = "index.html";
    });
}
let selectedTemplate = "classic"; // default

const templateCards = document.querySelectorAll(".template-card");
templateCards.forEach(card => {
  card.addEventListener("click", () => {
    // remove selected from others
    templateCards.forEach(c => c.classList.remove("selected"));
    // mark clicked as selected
    card.classList.add("selected");
    selectedTemplate = card.getAttribute("data-template");
    console.log("Selected Template:", selectedTemplate);
  });
});


