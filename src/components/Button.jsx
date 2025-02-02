import React from 'react'

const Button = (props) => {
  return (
    <button className='btn w-[150px] px-5 py-3 bg-blue-500 border cursor-pointer rounded-xl text-xl text-white hover:text-blue-400 hover:bg-white hover:border-blue-400' onClick={props.onClick}>
        {props.value}    
    </button>
  )
}

export default Button