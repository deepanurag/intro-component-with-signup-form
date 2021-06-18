const butn = document.querySelector('input[type ="submit"]');
var array = [document.querySelector('.one'), document.querySelector('.two'), document.querySelector('.three'), document.querySelector('.four')];
var icon = [document.querySelector('.error1'), document.querySelector('.error2'), document.querySelector('.error3'), document.querySelector('.error4'), ]
const email = document.querySelector('.email-id');

butn.addEventListener('click', emptyChecker);
email.addEventListener('keyup', emailChecker);


function emailChecker(e){
    var emailValue = email.value;
    if(!emailValue.includes('@')||!emailValue.includes('.')){
        array[2].innerHTML = "Please enter a valid email";
    }
    else{
        array[2].innerHTML = "";
    }
}

function emptyChecker(e){
    e.preventDefault();
    const input = document.querySelectorAll('input[type = "text"]');
    console.log(input.length);
    for(var i=0; i<input.length; i++){
        if(input[i].value.length === 0){
            array[i].innerHTML = "Please Enter the above field";
            icon[i].style.display = "inline";
        }
        else{
            array[i].innerHTML = "";
            icon[i].style.display = "none";
        }
    }

    var emailValue = email.value;
    if(!emailValue.includes('@')||!emailValue.includes('.')){
        array[2].innerHTML = "Please enter a valid email";
    }
    else{
        array[2].innerHTML = "";
    }
}