const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = {
email: event.target.elements.email.value.trim(),
password: event.target.elements.password.value.trim(),
    }

    if (data.login === "" || data.password === "") {
        return alert('All form fields must be filled in');
      }
    
     console.log(data);
      
     form.reset();}



