function showAlert() {
  alert("Let's Take Action!");
}

function sendData() {
  try {
    document.getElementById("formsaran").addEventListener("submit", (e) => {
      e.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      document.getElementById("nameShow").innerText = name;
      document.getElementById("emailShow").innerText = email;
      document.getElementById("messageShow").innerText = message;
    });
  } catch (err) {
    alert(err.message);
  }
}
