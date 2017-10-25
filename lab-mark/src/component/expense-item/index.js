import './expense-item.scss'
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
      <div className='expense-item'>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
        <p> {expense.name} </p>
        <p> {expense.price} </p>
        <button className='delete' onClick={() => expenseDestroy(expense)}>
          Delete
        </button>

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
