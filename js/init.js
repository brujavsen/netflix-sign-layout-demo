const buttonEye = document.querySelector('#eyeBtn');
const inputChange = document.querySelector('#input-pass');

buttonEye.addEventListener('click', ()=>{
    passVisible(inputChange, buttonEye);
})

function passVisible(input, btn) {
    //Change input password to text
    input.getAttribute('type') === 'password' ? input.setAttribute("type", "text") : input.setAttribute("type", "password");

    //Change the icon slash to normal
    btn.classList.item(1) === 'fa-eye-slash' ? btn.classList.replace('fa-eye-slash', 'fa-eye') : btn.classList.replace('fa-eye', 'fa-eye-slash');

    //Change color icon normal when the pass is visible
    btn.classList.item(1) !== 'fa-eye-slash' ? buttonEye.style.color = '#db0000c4' : buttonEye.style.color = 'white';
}
