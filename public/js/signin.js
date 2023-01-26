console.log("connected");
const btn = document.getElementById("signIn-button")
btn.addEventListener("click", function(e) {
    change();
    console.log("clicked");
})

function change() {
    console.log("change function");
    let signIn = document.getElementById("signIn-active")

    let signInDiv = document.getElementById("div-signIn")

    signInDiv.innerHTML = signIn.innerHTML;
}