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
    document.getElementById("input-profile-pic").click()
})