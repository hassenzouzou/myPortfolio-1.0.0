function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_4pu6vhl", "template_dtl7ves", parms)
    .then(alert("Email sent successfully"));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

function scrollToTop() {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function displayCurrentYear() {
  let currentDate = new Date();

  let year = currentDate.getFullYear();

  document.getElementById("currentYear").innerText = year;
}

onload = displayCurrentYear;

module.exports = {
  content: ["./*html"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
