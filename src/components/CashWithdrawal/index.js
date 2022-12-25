import {Component} from 'react'

import DenominationItem1 from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updatedBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="Card-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-Container">
            <p className="text">Your Balance</p>
            <p className="balance">
              {amount}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="money-list">
            {denominationsList.map(eachAmount => (
              <DenominationItem1
                key={eachAmount.id}
                denominationDetails={eachAmount}
                updateBalance={this.updatedBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
