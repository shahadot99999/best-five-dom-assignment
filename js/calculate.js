
//click handler calculator button
document.getElementById('calculate-button').addEventListener('click', function () {

    //add player number inner text

    const playerNumbertext = document.getElementById('player-number');
    const playerNumberString = playerNumbertext.innerText;
    const playerNumber = parseFloat(playerNumberString);
    console.log(playerNumber);

    //perplayerinputfiled

    const perPlayerFiled = document.getElementById('per-player');
    const perPlayerFiledString = perPlayerFiled.value;
    const perPlayer = parseFloat(perPlayerFiledString);
    perPlayerFiled.value = '';

    // player expense cost value 
    const playerExpenseText = document.getElementById('player-expense');
    const playerExpenseString = playerExpenseText.innerText;
    const playerExpense = parseFloat(playerExpenseString);



    //calculate player expense cost 
    const playerCost = playerExpense + (playerNumber * perPlayer);
    playerExpenseText.innerText = playerCost;

    document.getElementById('calculate-totall-button').addEventListener('click', function () {

        //manager input field
        const managerInputField = document.getElementById('manager-salary')
        const managerInputFieldString = managerInputField.value;
        const manager = parseFloat(managerInputFieldString);
        managerInputField.value = '';

        //coach inputfield
        const coachInputField = document.getElementById('coach-salary')
        const coachInputFieldString = coachInputField.value;
        const coach = parseFloat(coachInputFieldString);
        coachInputField.value = '';

        // totall expense cost value 
        const totallExpenseText = document.getElementById('totall-cost');
        const totallExpenseString = totallExpenseText.innerText;
        const totallExpense = parseFloat(totallExpenseString);

        //calculate result
        const totallcost = playerCost + manager + coach + totallExpense;
        totallExpenseText.innerText = totallcost
    })
})

document.getElementById('calculate-totall-button').addEventListener('click', function () {
    //manager input field
    const managerInputField = document.getElementById('manager-salary')
    const managerInputFieldString = managerInputField.value;
    const manager = parseFloat(managerInputFieldString);

    //coach inputfield
    const coachInputField = document.getElementById('coach-salary')
    const coachInputFieldString = coachInputField.value;
    const coach = parseFloat(coachInputFieldString);

    // totall expense cost value 
    const totallExpenseText = document.getElementById('totall-cost');
    const totallExpenseString = totallExpenseText.innerText;
    const totallExpense = parseFloat(totallExpenseString);

    //calculate result
    const totallcost = playerCost + manager + coach + totallExpense;
    totallExpenseText.innerText = totallcost
})
