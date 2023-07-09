const otp = document.querySelectorAll('.otp_field');
otp[0].focus();
otp.forEach((field, index) =>{
    field.addEventListener('keydown', (e) =>{
        if(e.key >=0 && e.key<=9){
            otp[index].value = "";
            setTimeout(() => {
                otp[index+1].focus();
            },4);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => {
                otp[index-1].focus();
            },4);
        }
    });
});
const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit .button'),
errortxt = form.querySelector('.error-text');

form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{


    let xhr = new XMLHttpRequest();    
    xhr.open("POST","./Php/otp.php",true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                if(data=="Success"){
                    alert("Registration Succesfull");
                    location.href="";
                }
                
            }
        }
    }


    let formData = new FormData(form);
    xhr.send(formData);
}