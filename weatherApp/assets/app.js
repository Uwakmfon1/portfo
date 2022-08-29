let weather={
    "apiKey":"7f8ec233a451cea4c27b5468a2795ae6"
}

const input =  document.getElementById("searchInput"); console.log(input.innerText);
const form = document.querySelector('form')
const name = document.querySelector(".city")
const temp = document.querySelector(".temperature")
const desc = document.querySelector('.cloudy');
const humidity = document.querySelector('.humidity');
const windSpeed =  document.querySelector('.windSpeed')
const icon = document.querySelector(".icon")

form.addEventListener('submit',(e)=>{
	e.preventDefault();
	console.log(input.value)
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7f8ec233a451cea4c27b5468a2795ae6')
	.then(response => response.json())
	// .then(data => console.log(data))
	.then(response => {
		let nameValue = response['name']; 
		let tempValue = response['main']['temp']
		let descValue = response['weather'][0]['description']
		let speedValue = response['wind']['speed']
		let humidityValue = response['main']['humidity']
		let iconSrc = response['weather'][0]['icon']

		
		name.innerHTML = nameValue;
		temp.innerHTML = Math.floor(tempValue -273.15)+"°c"
		desc.innerHTML = descValue
		humidity.innerHTML ="Humidity: "+ humidityValue+"%"
		windSpeed.innerHTML ="wind speed: "+speedValue+"km/h"
		icon.src = "http://openweathermap.org/img/wn/"+iconSrc+"@2x.png";
		
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ input.value +"buildings"+"')"
	})
	.catch(err => console.error(err));



})
