'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {categoryCreate as categoryActionCreate} from '../../actions/category-actions.js';
import {expenseCreate} from '../../actions/expense-actions.js';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


class Dashboard extends React.Component{
  

  render() {
    let {categoryCreate, categories, expenses, expenseCreate} = this.props;
    return(
      <main className='dashboard'>
        <h2>create a new category</h2>

        <CategoryForm
          buttonText='create a category'
          onComplete={categoryCreate}
        />

        {categories.map(item => 
          <CategoryItem
            key={item.id}
            category={item}
            expenses={expenses}
            onComplete={expenseCreate}
          />
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
   