import './category-item.scss'
import React from 'react'
import CategoryForm from '../category-form'
import ExpenseForm from '../expense-form'
import ExpenseItem from '../expense-item'
import {connect} from 'react-redux'
import * as category from '../../action/categories.js'
import * as expense from '../../action/expenses.js'

class CategoryItem extends React.Component {
  render(){

    let {category, categoryUpdate, categoryDestroy, expenseCreate, expenses} = this.props
    let categoryExpenses = expenses[category.id]

    return (
      <li className='category-item'>
        <CategoryForm onComplete={categoryUpdate} category={category} />
        <p> Title: {category.name} </p>
        <p> Amount: {category.amount} </p>
        <button className='delete' onClick={() => categoryDestroy(category)}>
          Remove
        </button>

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
