import React from 'react'
import { Link } from 'react-router'

export default function CategoryCard({category}) {
  return (
    <Link to={`/categories/${category.id}`}>
    <div key={category.id} className="flex flex-col items-center m-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img src={category.image} alt={category.name} className="w-50 h-60 object-cover rounded-lg"/>
      <h2 className="text-lg font-semibold text-center mt-2 text-black dark:text-white">{category.name}</h2>
    </div>
    </Link>
  )
}
