
//stape 1: click even for addEventListener;

document.getElementById('login-btn')
.addEventListener('click', function(){
//stape 2: mobile number anta hoba login ar jonno;
    const moblileNumberInput = document.getElementById('mobile-number')
    const number = moblileNumberInput.value
   
    // stape 3: passward anta hoba login ar jonno;
    const loginPasswordInput = document.getElementById('loging-password')
    const pass = loginPasswordInput.value;
    //stape 4: logical part
    if (number ==='01320760707' && pass ==='1234'){
        alert('Login success')
        window.location.assign("/home.html")
    }
    else{
        alert('feiled try agine')
    }
})