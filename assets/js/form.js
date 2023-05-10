const submitBtn = document.querySelector(".submit-btn");
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

function submitForm(){
    fetch(`https://brik-backend.onrender.com/email/landing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value
        })
    }).then(res => res.json())
    .then(data => {
        console.log(data.message)
    }).catch(error => console.log(error.message))
}

submitBtn.addEventListener("click", ()=>submitForm());