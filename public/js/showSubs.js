const div = document.getElementById('subscribes')
div.style.display = 'none'

function switchDisplay() {
    if (div.style.display == 'none')
        div.style.display = 'table' 
    else if (div.style.display == 'table')
        div.style.display = 'none'
    console.log("switched")
}

let btn = document.getElementById("btn-subs")
btn.addEventListener('click', function(event) {
    switchDisplay()
})