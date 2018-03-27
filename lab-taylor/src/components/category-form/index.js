'use strict';

import React from 'react';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: props.category ? props.category.name : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state))
  }

  render() {
    return(
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input  
          name='name'
          type='text'
          placeholder='create a new category and track your expenses...'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;
