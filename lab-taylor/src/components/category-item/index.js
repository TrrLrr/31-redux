'use strict';

import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {
  categoryUpdate,
  categoryDelete
} from '../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let {category, categoryUpdate, categoryDelete} = this.props;
    return(
      <section className='category-item'>
        <div> 
          <div className='content'>
            <h2>{category.name}</h2>
            <button onClick={() => categoryDelete(category)}>X</button>
          </div>
          <div>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
        </div>
      </section>
    )
  }

}

let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category))
});

export default connect(null, mapDispatchToProps)(CategoryItem);