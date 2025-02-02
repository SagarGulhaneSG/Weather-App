import React, { useEffect } from 'react';
import "./App.css"
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import { useWeather } from './context/Weather';




const App = () => {

  const weather = useWeather();
  console.log(weather)

  useEffect(()=>{
    weather.fetchCurrentLocation()
  },[])

  return (
    <div className='app sm:border  p-5 flex flex-col items-center w-[390px] backdrop-blur-sm text-white'>
      <h1 className='text-4xl font-bold mb-10'>Weather Forecast</h1>
      <Input/>
      <Button  onClick={weather.fetchData} value="Search" />
      <Card/>
     
    </div>
  )
}

export default App