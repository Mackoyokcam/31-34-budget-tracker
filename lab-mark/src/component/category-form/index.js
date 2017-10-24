import React from 'react'

let emptyState  = {
  name: '',
  amount: 0,
}

class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.category || emptyState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let {value, name} = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category)
      this.setState(nextProps.category)
  }

  render(){
    let buttonText = this.props.category ? 'update': 'create'

    return (
      <form
        onSubmit={this.handleSubmit}
        className='category-form'>

        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='number'
          name='amount'
          placeholder='amount'
          value={this.state.amount}
          onChange={this.handleChange}
        />

        <button type='submit'> {buttonText} </button>

      </form>
    )
  }
}

export default CategoryForm
