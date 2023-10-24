import axios from 'axios'

export const getAllCountries = async ()=>{
   const res =  await axios.get('https://restcountries.com/v3.1/all');
   console.log(res);
   return res;
}

export const getWeather = async ()=>{
    const date = new Date().getDate()
    console.log(date);
    const res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={9c9ea7030eed8e9ad827023af9941420}`);
    console.log(res);
    return res;
}