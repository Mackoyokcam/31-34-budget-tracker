import './category-item.scss'
import React from 'react'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import {connect} from 'react-redux'
import * as category from '../../action/categories.js'
import * as expense from '../../action/expenses.js'
import * as util from '../../lib/util.js'

class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {editing: false}
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(category){
    this.props.categoryUpdate(category)
    this.setState({editing: false})
  }

  render(){

    let {category, categoryDestroy, expenseCreate, expenses} = this.props
    let categoryExpenses = expenses[category.id]
    let {editing} = this.state

    return (
      <li className='category-item'>
        <button className='delete' onClick={() => categoryDestroy(category)}>
        Remove
        </button>
        {util.renderIf(editing,
          <CategoryForm onComplete={this.handleUpdate} category={category} />)}
        {util.renderIf(!editing,
          <div onDoubleClick={() => this.setState({editing: true})}>
            <p> Title: {category.name} </p>
            <p> Amount: {category.amount} </p>
          </div>
        )}

        <ExpenseForm onComplete={expenseCreate} category={category}/>
        {categoryExpenses.map((expense, i) =>
          <ExpenseItem
            expense={expense}
            key={i}
          />
        )}
      </li>
    )
  }
}

let mapStateToProps = (state) => ({expenses: state.expenses})

let mapDispatchToProps = (dispatch) => ({
  categoryUpdate: (data) => dispatch(category.update(data)),
  categoryDestroy: (data) => dispatch(category.destroy(data)),
  expenseCreate: (data) => dispatch(expense.create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
