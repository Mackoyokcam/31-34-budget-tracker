import React from 'react'
import CategoryForm from '../category-form'
import {connect} from 'react-redux'
import * as category from '../../action/category.js'

class CategoryItem extends React.Component {
  render(){

    let {category, categoryUpdate, categoryDestroy} = this.props

    return (
      <li className='category-item'>
        <p> Title: {category.name} </p>
        <p> Amount: {category.amount} </p>
        <button name='delete' onClick={() => categoryDestroy(this.props.category)}>Delete</button>

        <h3> Update your category </h3>
        <CategoryForm onComplete={categoryUpdate} category={category}/>
      </li>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    categories: state ,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (data) => dispatch(category.update(data)),
    categoryDestroy: (data) => dispatch(category.destroy(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)
