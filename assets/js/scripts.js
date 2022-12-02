function loadAnimations(){
    let nav = document.getElementById('nav');
    nav.style.transform = "translateY(0%)";
    nav.style.opacity = "100%"
    let form = document.getElementById('form');
    form.style.transform = "translateY(0%)";
    form.style.opacity = "100%"
    let footer = document.getElementById('footer');
    footer.style.transform = "translateY(0%)";
    footer.style.opacity = "100%"
}

function validateForm() {

    //Input Fields
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    //Response Spans
    let nameResp = document.getElementById('nameResp');
    let phoneResp = document.getElementById('phoneResp');
    let passResp = document.getElementById('passResp');
    let emailResp = document.getElementById('emailResp');


    //Name Validation
    let nameReg = /^([a-zA-Z]){5,25}$/;
    let nameValid = nameReg.test(name);
    if(name.length === 0){
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Enter a username!"
    }
    else if(!nameValid){
        nameResp.classList.remove("text-success");
        nameResp.classList.add("text-danger");
        nameResp.innerText = "Username is invalid!"
    }
    else{
        nameResp.classList.remove("text-danger");
        nameResp.classList.add("text-success");
        nameResp.innerText = "Username is valid";
    }



    //Phone Validation
    let phoneReg = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;
    let phoneValid = phoneReg.test(phone);
    if(phone.length === 0){
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Enter a phone number!"
    }
    else if(!phoneValid){
        phoneResp.classList.remove("text-success");
        phoneResp.classList.add("text-danger");
        phoneResp.innerText = "Phone Number is invalid!"
    }
    else{
        phoneResp.classList.remove("text-danger");
        phoneResp.classList.add("text-success");
        phoneResp.innerText = "Phone Number is valid";
    }

    //Password Validation
    let passReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?\/~_+-=|]).{8,32}$/;
    let passValid = passReg.test(password);
    if(password.length === 0){
        passResp.classList.remove("text-success");
        passResp.classList.add("text-danger");
        passResp.innerText = "Enter a Password!"
    }
    else if(!phoneValid){
        passResp.classList.remove("text-success");
        passResp.classList.add("text-danger");
        passResp.innerText = "Password is invalid!"
    }
    else{
        passResp.classList.remove("text-danger");
        passResp.classList.add("text-success");
        passResp.innerText = "Password is valid";
    }

}