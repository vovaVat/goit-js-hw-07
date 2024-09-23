const loginForm= document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form= event.target;
    const loginInp= form.elements.email.value.trim();
    const passwordInp= form.elements.password.value.trim();
    
    if (loginInp === "" || passwordInp=== ""){
        console.log('All form fields must be filled in');
    }
    else{
        const formObj= {
            email: loginInp,
            password: passwordInp,
        }
        console.log(formObj);
        
        form.reset();
    }
})