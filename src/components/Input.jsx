import React from 'react'
import {useWeather} from "../context/Weather";


const Input = () => {

    const weather = useWeather();
 

  return (
    <input className='outline-none text-xl border px-5 py-3 rounded-full w-full my-5' placeholder='Search City' value={weather.city} onChange={(e)=>weather.setCity(e.target.value)} />
  )
}

export default Input