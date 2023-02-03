console.clear()

function confirmPass() {
    let pass = document.getElementById('pass').value
    let passConfirm = document.getElementById('pass-confirm').value

    if (pass != passConfirm)
        return false
    return true
}

function changeName() {
    let name = document.getElementById("name").value
    let changeName = document.getElementById("profile-changeName")
    changeName.innerText = name
}

document.getElementById("profile-pic").addEventListener("click", function(event) {
    changeName()
    let file = document.getElementById("input-profile-pic")
    file.click()    
})

document.getElementById("profile-pic").addEventListener("change", function(event) {
    let photo = document.getElementById('profile-pic');
    let file = document.getElementById("input-profile-pic")
    if (file.files.length == 0) {
        return;
    }
    let reader = new FileReader();
    // Está pegando o caminho da imagem
    reader.readAsDataURL(file.files[0]);
    // Coloca o caminho da imagem no Source da tag IMG
    reader.onload = () => {
    photo.style.backgroundImage = 'url("' + reader.result + '")'
    } 
})
