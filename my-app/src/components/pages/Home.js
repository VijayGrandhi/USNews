import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import SmallerCards from "../SmallerCards";
import WeatherCard from "../WeatherCard";
import { getAPIData } from "./getAPIData";
import { getWeatherAPIData } from "./getWeatherAPIData";

const Home = () => {
  //weather
  const [weather, setWeather] = useState([]);

  useEffect(()=>{
    getWeatherAPIData().then((data)=>{
      console.log(data.current.condition.text);
      console.log(data.current.feelslike_f);
      console.log(data.current.humidity);
      console.log(data.current.temp_f);
      console.log(data.current.wind_mph);

      console.log(data.location.name);
      console.log(data.location.lat);
      console.log(data.location.lon);
      console.log(data.location.localtime);
      setWeather({
        condition:data.current.condition.text,
        feelsLike:data.current.feelslike_f,
        humidity:data.current.humidity,
        temperature:data.current.temp_f,
        wind_mph:data.current.wind_mph,
        location_name:data.location.name,
        latitude:data.location.lat,
        longitude:data.location.lon,
        local_time:data.location.localtime
      });
    });
    
  },[]);
  console.log(weather);

  //

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAPIData("business").then((data) => {
      console.log(data);
      setArticles(data.articles);
    });
  }, []);

  console.log(articles);
  console.log(localStorage.getItem("token"))

  return (

    <div>
      
      <WeatherCard location={weather.location_name} temperature={weather.temperature} humidity={weather.humidity} lat={weather.latitude} lon={weather.longitude} wind_mph={weather.wind_mph} condition={weather.condition} local_time={weather.local_time} feelsLike={weather.feelsLike}/>

      <br />
      <MainCard title="TRENDING NEWS" subtitle="Find your trending news on our homepage" />
      <br />
      {/* <SmallerCards />
        <br />
        <SmallerCards /> */}

      {articles.map((article) => (
        <SmallerCards key={article.title} article={article} />
        
      ))}
    </div>
  );
};

export default Home;
