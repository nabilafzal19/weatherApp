const container = document.getElementById('Container')
const  btn = document.getElementById('btn')
const weatherphoto = document.querySelector('.weatherphotoimg')
const cityName = document.querySelector('.cityname')
const temp = document.querySelector('.temp')
const cloud = document.querySelector('.cloudinfo')

const inputCityName = document.getElementById('inputcity')




btn.addEventListener('click',function(){
 
   
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputCityName.value+"&units=metric&appid=f17adfdb1dd8aac0cca3e98fb73c159b").
  then(response=> response.json()).
  then(data=>{
     getweather(data);
    console.log(data)
  }).catch(err =>{
    cityName.innerHTML = "enter a valid city";
  })
})


function getweather(weatherData){
  
   cityName.innerHTML = weatherData.name;
   temp.innerHTML = weatherData.main.temp;
   

   cloud.innerHTML = weatherData.weather[0].description;

    // weatherphoto.src ="rain.jpg";
    switch(weatherData.weather[0].description)
    {
      case "clear":
      case "clear sky":
                 weatherphoto.src = "clear.jpg";
                 break;

      case "rain":
      case "heavy rain":

                  weatherphoto.src = "rain.jpg";
                  break;
      case "thuder storm":
                  weatherphoto.src = "thunderstorm.jpg";
                  break;
      case "light rain" :
      case "moderate rain" :
                  weatherphoto.src = "lightrain.jpg";
                  break;
      case "light snow":
        case "snow" : 
                    weatherphoto.src ="snow.jpg";
                    break;
        default :
                     weatherphoto.src = "clouds.jpg";            



    }


}