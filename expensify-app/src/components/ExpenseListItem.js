import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
  <div>
    <h3>
      <Link 
        to={`/edit/${id}`} 
      >
        {description} 
      </Link>
    </h3>
    <p>{amount} - {createdAt}</p>
  </div>
)

export default connect()(ExpenseListItem);