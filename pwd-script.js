const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateButton = document.getElementById('getBtn');
const passBox = document.getElementById('passBox');
const copyButton = document.getElementById('copyIcon');
const passIndicator = document.getElementById('passIndicator');

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = '!"#$%&/()=?¡¿@^[]-_<>';
const numberChars = "0123456789";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=> {sliderValue.textContent = inputSlider.value
    generatePassword();
});
generateButton.addEventListener("click", generatePassword);

function generatePassword(){
    let characters = "";
    let password = "";

    characters += lowercase.checked ? lowercaseChars : "";
    characters += uppercase.checked ? uppercaseChars : "";
    characters += symbols.checked ? symbolChars : "";
    characters += numbers.checked ? numberChars : "";

    for(let i = 0; i < inputSlider.value; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passBox.value = password;
    updatePasswordIndicator();
}

function updatePasswordIndicator(){
    const strength = getPasswordStrength(passBox.value);
    passIndicator.className = "passIndicator " + strength; 
}

function getPasswordStrength(password){
    if(password.length <=10){
        return "weak";
    } else if(password.length <= 20){
        return "medium";
    } else {
        return "strong";
    }

}

window.addEventListener('DOMContentLoaded', updatePasswordIndicator);

copyButton.addEventListener("click", ()=>{

    if(passBox.value !== "" || passBox.length >= 1){
    navigator.clipboard.writeText(passBox.value);
    copyButton.innerHTML = "check";

    setTimeout(()=>{
        copyButton.innerHTML = "content_copy";
    }, 3000)

    }
})