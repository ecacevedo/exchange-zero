import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowCategories(props) {
  return (
    <>
      <h2 className="categories-title">Categories</h2>
      <div className="show-categories">
      {props.categories.map(category => (
        <Link className="category-link" to={`/categories/${category.id}`}>
          <p>{category.category_name}</p> </Link>
        
      ))}
        </div>
    </>
  )
}
