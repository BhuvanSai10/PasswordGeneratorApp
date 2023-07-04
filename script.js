const passwordBox = document.getElementById("password")
const length = 12

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopkrstuvwxyz"
const numbers = "0123456789"
const symbols = "`!@#$%^&*()_+*-.=~<>[]"
const allchars = upperCase + lowerCase + numbers + symbols

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]

    while(length > password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)]
    }

    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}
