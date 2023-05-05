// Elements
const depositButton = document.getElementById('deposit-button');
const depositInput=document.getElementById('deposit-input');
const depositTotal=document.getElementById('deposit-total');
const balanceTotal = document.getElementById('balance-total');
const withdrawButton=document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input');
const withdrawTotal = document.getElementById('withdraw-total');

// Handle Deposit Button Event

const depositHandler = () => {
    // get the amount deposited
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //    update deposit total
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = parseFloat(previousDepositAmount + newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // Update Account Balance
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    //    Clear deposit input field

    depositInput.value = ''
    
}

const withdrawHandler = () => {
    // get the amount withdraw
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // set the amount withdraw total

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // update withdraw total
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance  
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
    
}
// Deposit

depositButton.addEventListener('click',depositHandler)

// Withdraw
withdrawButton.addEventListener('click',withdrawHandler)