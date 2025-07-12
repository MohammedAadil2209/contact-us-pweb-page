function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    alert("⚠️ Please fill in all fields.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return false;
  }

  document.getElementById("contactForm").reset();
  document.getElementById("thankYouMessage").style.display = "block";
  return false; // Prevent actual form submission (for demo)
}
