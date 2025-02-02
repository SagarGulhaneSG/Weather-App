import React from 'react';
import { useWeather } from '../context/Weather';

const Card = () => {

  const weather = useWeather();

  return (
    <div className='card flex flex-col items-center'>
        <img src={weather?.data?.current?.condition?.icon} alt="" className='w-[150px]' />
        <h2 className='text-7xl my-3 font-bold'>{weather?.data?.current?.temp_c} &#8451;</h2>
        <h5 className='text-4xl'>{weather?.data?.location?.name},{weather?.data?.location?.country}</h5>
        <div className='flex mt-10 justify-between w-[320px] gap-5'>
          <div className='flex flex-col items-center'>
            <h3 className='text-3xl font-medium'>{weather?.data?.current?.humidity}</h3>
            <h4 className='text-xl font-normal'>Humidity</h4>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-3xl font-medium'>{weather?.data?.current?.wind_kph}km/h</h3>
            <h4 className='text-xl font-normal'>Wind Speed</h4>
          </div>
        </div>
    </div>
  )
}

export default Card