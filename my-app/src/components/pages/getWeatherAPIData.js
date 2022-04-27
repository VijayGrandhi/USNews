export const getWeatherAPIData = async (chosenCity)=>{
    var apiKey = '7aad8de6434841d0afd233500221904';
    var url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${chosenCity}&aqi=no`
    const response = await fetch(url);
    const json = await response.json();
    return json;

}