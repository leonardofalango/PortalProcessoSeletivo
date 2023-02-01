
function changeProcess(i, listinhaDosProcessos) {
    let job = document.getElementById('job')
    let capacity = document.getElementById('capacity')
    let date = document.getElementById('date')
    let phases = document.getElementById('phases')
    let details = document.getElementById('textArea')
    let subscription_fee = document.getElementById('subscription_fee')

    job.value = listinhaDosProcessos[i].job
    capacity.value = listinhaDosProcessos[i].capacity
    date.value = listinhaDosProcessos[i].date
    phases.value = listinhaDosProcessos[i].phases
    details.value = listinhaDosProcessos[i].details
    subscription_fee.value = listinhaDosProcessos[i].subscription_fee
}