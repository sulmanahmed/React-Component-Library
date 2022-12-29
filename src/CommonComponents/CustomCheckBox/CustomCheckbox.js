import React from 'react'
import "./CustomCheckbox.css"

export default function CustomCheckbox({handleChange,status}) {
  return (
    <input
    type="checkbox"
    onChange={handleChange}
    checked={status?status:false}
    className="checkBoxDesign"
  />
  )
}
