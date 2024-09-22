function getInputFromId(id){
    return parseFloat(document.getElementById(id).value)
}

function setTextValue(id,value){
    return document.getElementById(id).innerText = value
}

function tabSwitch(id){
    document.getElementById('donationSection').classList.add('hidden')
    document.getElementById('historySection').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}


document.getElementById('donationTab').addEventListener('click', (e)=>{
    tabSwitch('donationSection')
})

document.getElementById('historyTab').addEventListener('click', (e)=>{
    tabSwitch('historySection')
})


let newMyBalance = 5500
let noakhaliTotalDonation = 0
document.getElementById('donateNowButton1').addEventListener('click', (e)=>{
    let noakhaliInputValue = getInputFromId('noakhaliInput')
    setTextValue('noakhaliTotal', `${noakhaliTotalDonation+=noakhaliInputValue} BDT`)
    
    newMyBalance = newMyBalance - noakhaliInputValue
    document.getElementById('myBalance').innerText = `${newMyBalance} BDT`

    document.getElementById('noakhaliInput').value = ''

    const newDiv = document.createElement('div')
    newDiv.classList
    .add('w-full','border','border-black/15','p-6','rounded-xl','my-5')


    newDiv.innerHTML = 
    `
    <h1 class="font-semibold"> ${noakhaliInputValue} Taka is ${document.getElementById('noyakhaliHeadText').innerText} </h1>
    <p class="font-light text-sm text-black/80 mt-2"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
    `

    document.getElementById('historySection').appendChild(newDiv)
})


let feniTotalDonation = 0
document.getElementById('donateNowButton2').addEventListener('click', (e)=>{
    let feniInputValue = getInputFromId('feniInput')
    setTextValue('feniTotal', `${feniTotalDonation+=feniInputValue} BDT`)

    newMyBalance = newMyBalance - feniInputValue
    document.getElementById('myBalance').innerText = `${newMyBalance} BDT`

    document.getElementById('feniInput').value = ''
})


let quotaTotalDonation = 0
document.getElementById('donateNowButton3').addEventListener('click', (e)=>{
    let quotaInputValue = getInputFromId('quotaInput')
    setTextValue('quotaTotal', `${quotaTotalDonation+=quotaInputValue} BDT`)

    newMyBalance = newMyBalance - quotaInputValue
    document.getElementById('myBalance').innerText = `${newMyBalance} BDT`

    document.getElementById('quotaInput').value = ''
})