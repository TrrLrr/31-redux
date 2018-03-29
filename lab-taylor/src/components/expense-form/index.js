'use strict';

import React from 'react';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = props.expense ? {...props.expense} : { 
      expense: '', 
      cost: '',
      categoryID: props.categoryID,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){
    let {name, value, type} = e.target;

    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value)
        })
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete({...this.state});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expense) {
      this.setState({...nextProps.expense});
    }

    if (nextProps.categoryID) {
      this.setState( {categoryID: nextProps.categoryID });
    }
  }

  render() {
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
      <input  
        name='expense'
        type='text'
        placeholder='create a new expense...'
        value={this.state.expense}
        onChange={this.handleChange}
      />

      <input  
        name='cost'
        type='number'
        placeholder='input cost...'
        value={this.state.cost}
        onChange={this.handleChange}
      />
      <button type='submit'>{this.props.buttonText}</button>
    </form>
    )
  }
}

export default ExpenseForm;