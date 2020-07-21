import React from 'react'
import { Link } from 'react-router-dom'

export default function ShowCategories(props) {
  return (
    <>
      <h2 className="categories-title">Categories</h2>
      <div className="show-categories">
      {props.categories.map(category => (
        <Link to={`/categories/${category.id}`}>
          <p className="header-link">{category.category_name}</p> </Link>
        
      ))}
        </div>
    </>
  )
}
