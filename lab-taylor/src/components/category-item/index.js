'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import {
  categoryUpdate,
  categoryDelete
} from '../../actions/category-actions';
import { expenseCreate } from '../../actions/expense-actions';

import { renderIf } from '../../lib/util.js';


class CategoryItem extends React.Component {
  

  render() {
    let {category, categoryUpdate, categoryDelete, expenses, expenseCreate} = this.props;
    
    return (
      <section className='category-item'>
        <div> 
          <div className='content'>
            <h2>{category.name}</h2>
            <h2>{category.budget}</h2>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
          <div>
            <ExpenseForm
              categoryID={category.id}
              buttonText='create expense'
              onComplete={expenseCreate}
            />
          </div>
          { renderIf(expenses[category.id].length, <ExpenseItem expenses={expenses[category.id]} />)}
        </div>
      </section>
    )
  }
}


let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  expenseCreate: (expense) => dispatch(expenseCreate(expense)),
});

export default connect(null, mapDispatchToProps)(CategoryItem);