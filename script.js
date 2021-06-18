const transactionUl = document.querySelector('#transactions')

const dummyTransactions = [
    {id: 1, name: 'Bolo de Arroz', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Guitarra', amount: 150}
]

const addTransactionIntoDOM = transaction => {
   const operator = transaction.amount < 0 ? '-' : '+'
   const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
   const amountWithoutOperator = Math.abs(transaction.amount)
   const li = document.createElement('li')

   li.classList.add(CSSClass)
   li.innerHTML = `
    ${transaction.name} <span>${operator} Kz ${amountWithoutOperator}</span><button class="delete-btn>x</button>
   `
   transactionUl.append(li)
}

const updateBalanceValues = () => {
    const transactionAmounts = dummyTransactions
        .map(transaction => transaction.amount)
    const total = transactionAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2)
    const income = transactionAmounts.filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    const expense = transactionAmounts.filter(value => value > 0)
        .reduce((accumulator, value) => accumulator + value, 0)
        .toFixed(2)
    console.log(expense)
}

const init = () =>{
    dummyTransactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()