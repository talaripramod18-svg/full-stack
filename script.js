document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMsg = document.getElementById("errorMsg");

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required!";
        errorMsg.style.color = "red";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMsg.textContent = "Enter a valid email!";
        errorMsg.style.color = "red";
        return;
    }

    errorMsg.textContent = "Enquiry sent successfully! We will contact you 😊";
    errorMsg.style.color = "green";
    this.reset();
});
