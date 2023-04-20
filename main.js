
let getTip = document.querySelector('button')
let amount = document.getElementById('amount')

console.log(amount)



getTip.addEventListener( 'click' , function (){
    let percentage = document.getElementById('percentage')

    const tAmount = JSON.parse(amount.value);
    const perctn = JSON.parse(percentage.value);

    let tip = 0

    tip = tAmount * perctn/100
    console.log(tip)
    document.querySelector('p').innerText="Your Tip Is "+tip
} )


