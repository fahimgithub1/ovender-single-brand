import React from 'react'
import FillupForm from '../shopingCartComp/fillupForm'

export default function NewAddress(props) {
  return (
    <div className='profileNewAddress mt-4 mb-4'>
        <FillupForm onFromClose={props.onFromClose} />
    </div>
  )
}