const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        SecureToken: "c395a7ed-cf06-4c27-b2c7-d41776bc333a",
        To : 'brockdetar@gmail.com',
        From : "brockdetar@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
});