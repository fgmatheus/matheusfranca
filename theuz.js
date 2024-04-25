let back_to_top = document.querySelector('.top');
      
back_to_top.addEventListener('click', function (e) {
window.scrollTo({
    top: 0,
    left: 0,
    });
});

/*  */

document.querySelectorAll('.imagem-teste').forEach(function(img) {
img.addEventListener('click', function() {
    var imgSrc = this.src;
    var maxImg = '<img src="' + imgSrc + '" />';
    document.getElementById('imagem-maximizada').innerHTML = maxImg;
    document.getElementById('imagem-maximizada').style.display = 'block';
    });
});

document.getElementById('imagem-maximizada').addEventListener('click', function() {
    this.style.display = 'none';
});

/*  */

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const service = document.getElementById("service");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email:${email.value}<br> Phone Number:${service.value}<br> Message:${mess.value}`;

    if (!fullName.value || !email.value || !service.value || !mess.value) {
        displayAlert('danger', 'Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      displayAlert('success', 'E-mail enviado com sucesso!')
    );
}

function displayAlert(type, message) {
    const alertDiv = document.getElementById('alert-message');
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 2500);
}


/* function checkInputs(){
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })

        item.addEventListener("keyup", () =>{
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
    
        if (email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address";
        }else{
            errorTxtEmail.innerText = "Email address can´t be blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
    
        form.reset();
        return false;
    }
}) */