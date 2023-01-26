function redirect(link) {
    window.location.href = link;
}

function toggleShowPassword() {
    var password = document.getElementById("pass")
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
}