const form = document.querySelector('.form form'),
submitbtn = form.querySelector('.submit input'),
errortxt = form.querySelector('.error-text');
$(".toggle-password").click(function(){
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input =$($(this).attr("toggle"));
    if(input.attr("type")=="password"){
        input.attr("type","text");
    }else{
        input.attr("type","password");
    }
});
form.onsubmit = (e) => {
    e.preventDefault();
}

submitbtn.onclick = () =>{


    let xhr = new XMLHttpRequest();    
    xhr.open("POST","./Php/Login.php",true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                
                if(data=="success"){
                    alert("Login succesfull");
                    location.href="";
                }
                
                else{
                    errortxt.textContent = data;
                    errortxt.style.display = "block";
                }
            }
        }
    }


    let formData = new FormData(form);
    xhr.send(formData);
}