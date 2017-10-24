import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import * as expense from '../../action/expenses.js'

class ExpenseItem extends React.Component {
  render(){
    let {
      expense,
      expenseDestroy,
      expenseUpdate,
    } = this.props

    return (
      <div className='card'>
        <p> {expense.name} </p>
        <p> {expense.price} </p>
        <button onClick={() => expenseDestroy(expense)}>
          Delete
        </button>

        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})
let mapDispatchToProps = (dispatch) => ({
  expenseDestroy: (data) => dispatch(expense.destroy(data)),
  expenseUpdate: (data) => dispatch(expense.update(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem)
