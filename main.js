//login button even handler
const EnterButton = document.getElementById('EnterButton');
EnterButton.addEventListener('click', function(){
    const welcomeArea = document.getElementById('Welcome-Area');
    welcomeArea.style.display = 'none';
    const transitionArea = document.getElementById('transition-area');
    transitionArea.style.display = 'block'
})
// deposit button even handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount')
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById('depositAmount').value = "";
})

// withdraw button even handler

const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener("click", function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById('withdrawAmount').value = "";

  
})
function getInputNumber (id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}