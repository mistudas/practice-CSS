const options = {
	method: 'GET',
	headers: {
		 'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        // 'X-RapidAPI-Key': '7c802d2ef9msh87d96db82e0d48dp1e4595jsn4d3ec56e3e19',
		// 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

	}
};

const getweather = (city)=>
{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
.then(response => response.json())
.then((response) => {
    
console.log(response)
//cloud_pct.innerHTML =response.cloud_pct
temp.innerHTML = response.temp
temp2.innerHTML = response.temp
feels_like.innerHTML = response.feels_like
humidity.innerHTML = response.humidity
humidity2.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
wind_speed2.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value)
})

getweather("Delhi")

const getweatherShanghai = ()=> {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
.then(response => response.json())
.then((response) => {
shanghaiIDcloudPct.innerHTML =response.cloud_pct
shanghaiIDtemp.innerHTML = response.temp
shanghaiIDfeelsLike.innerHTML = response.feels_like
shanghaiIDhumidity.innerHTML = response.humidity
shanghaiIDminTemp.innerHTML = response.min_temp
shanghaiIDmaxTemp.innerHTML = response.max_temp
shanghaiIDwindSpeed.innerHTML = response.wind_speed

shanghaiIDwindDegrees.innerHTML = response.wind_degrees
shanghaiIDsunrise.innerHTML = response.sunrise
shanghaiIDsunset.innerHTML = response.sunset
})
}

const getweatherBoston = ()=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then((response) => {
	bostonIDcloudPct.innerHTML =response.cloud_pct
	bostonIDtemp.innerHTML = response.temp
	bostonIDfeelsLike.innerHTML = response.feels_like
	bostonIDhumidity.innerHTML = response.humidity
	bostonIDminTemp.innerHTML = response.min_temp
	bostonIDmaxTemp.innerHTML = response.max_temp
	bostonIDwindSpeed.innerHTML = response.wind_speed
	
	bostonIDwindDegrees.innerHTML = response.wind_degrees
	bostonIDsunrise.innerHTML = response.sunrise
	bostonIDsunset.innerHTML = response.sunset
	})
	}
const getweatherLucknow = ()=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response) => {
	lucknowIDcloudPct.innerHTML =response.cloud_pct
	lucknowIDtemp.innerHTML = response.temp
	lucknowIDfeelsLike.innerHTML = response.feels_like
	lucknowIDhumidity.innerHTML = response.humidity
	lucknowIDminTemp.innerHTML = response.min_temp
	lucknowIDmaxTemp.innerHTML = response.max_temp
	lucknowIDwindSpeed.innerHTML = response.wind_speed
	lucknowIDwindDegrees.innerHTML = response.wind_degrees
	lucknowIDsunrise.innerHTML = response.sunrise
	lucknowIDsunset.innerHTML = response.sunset
	})
	}
const getweatherKolkata = ()=> {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then((response) => {
	kolkataIDcloudPct.innerHTML =response.cloud_pct
	kolkataIDtemp.innerHTML = response.temp
	kolkataIDfeelsLike.innerHTML = response.feels_like
	kolkataIDhumidity.innerHTML = response.humidity
	kolkataIDminTemp.innerHTML = response.min_temp
	kolkataIDmaxTemp.innerHTML = response.max_temp
	kolkataIDwindSpeed.innerHTML = response.wind_speed
	kolkataIDwindDegrees.innerHTML = response.wind_degrees
	kolkataIDsunrise.innerHTML = response.sunrise
	kolkataIDsunset.innerHTML = response.sunset
	})
	}
	getweatherShanghai()
	getweatherBoston()
	getweatherLucknow()
	getweatherKolkata()