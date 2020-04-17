module.exports = function account() {
  let output = {}
  let customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }
  function setAccountType () {
    if (parseInt(customerAccount.checking) === 1) {
      customerAccount.type = 'checking'
      debugger
    } else {
      customerAccount.type = 'savings'
    }
  }
  
  let signupBonus = 250,
  deposit = 1000

  let openAccount = function(account, deposit) {
    account.balance += signupBonus
    debugger
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] =Object.assign({},customerAccount)// 'customerAccount'

  openAccount(customerAccount,deposit)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}
// account()