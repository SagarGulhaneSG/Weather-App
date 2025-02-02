const URL = "https://api.weatherapi.com/v1/current.json?key=595902464512460b804125530250102";


export const getWeatherDataForCity = async (city)=>{
    const response = await fetch(`${URL}&q=${city}&aqi=yes`)
    return await response.json();
};

export const getWeatherDataForLocation = async (lat,lon)=>{
    const response = await fetch(`${URL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
};