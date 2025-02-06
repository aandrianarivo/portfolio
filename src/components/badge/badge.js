import React from 'react'

function Badge({ name }) {
  return (
    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
      {name}
    </span>)
}

export default Badge