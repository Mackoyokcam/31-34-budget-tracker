import './expense-item.scss'
import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from '../expense-form'
import * as expense from '../../action/expenses.js'
import * as util from '../../lib/util.js'

class ExpenseItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {editing: false}
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(expense){
    this.props.expenseUpdate(expense)
    this.setState({editing: false})
  }

  render(){
    let {
      expense,
      expenseDestroy,
    } = this.props
    let {editing} = this.state

    return (
      <div className='expense-item'>
        {util.renderIf(editing,
          <ExpenseForm expense={expense} onComplete={this.handleUpdate} />)}
        {util.renderIf(!editing,
          <div onDoubleClick={() => this.setState({editing: true})}>
            <p> {expense.name} </p>
            <p> {expense.price} </p>
          </div>
        )}
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
