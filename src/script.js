


const theWeather = document.getElementById('theWeather')
const theMetra = document.getElementById('theMetra')

var urlParams = new URLSearchParams(window.location.search);
var weatherapi = urlParams.get('w')
var googleapi = urlParams.get('m')
// console.log(urlParams.get('w'))
// console.log(urlParams.get('m'))


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=4916732&APPID=' + weatherapi, true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
  	var d = new Date(data.dt*1000)
  	const theWeatherTime = document.createElement('h3')
  	  theWeatherTime.textContent = 'Time: '.concat(d)

    	const theWeatherWeather = document.createElement('h3')
  	  theWeatherWeather.textContent = 'Weather: ' + data.weather[0].main + '. '

  	const theWeatherTemp = document.createElement('h3')
  		theWeatherTemp.textContent = 'Temperature: ' + Math.round(data.main.temp - 273.15).toString() + ' deg C and feels like ' + Math.round(data.main.feels_like - 273.15).toString() + ' deg C.'

  	const theWeatherWind = document.createElement('h3')
  		theWeatherWind.textContent = 'Wind: ' + Math.round(data.wind.speed).toString() + ' m/s.'

  	const theWeatherHumidity = document.createElement('h3')
  		theWeatherHumidity.textContent = 'Humidity: ' + Math.round(data.main.humidity).toString() + ' %.'

  	const theWeatherVisibility = document.createElement('h3')
  		theWeatherVisibility.textContent = 'Visibility: ' + Math.round(data.visibility/1000).toString() + ' km.'

      theWeather.appendChild(theWeatherTime)
      theWeather.appendChild(theWeatherWeather)
      theWeather.appendChild(theWeatherTemp)
      theWeather.appendChild(theWeatherHumidity)
      theWeather.appendChild(theWeatherWind)
      theWeather.appendChild(theWeatherVisibility)
    
    
  } else {
    console.log('error')
  }
}

request.send()

// var requestWilmette = new XMLHttpRequest()
// var requestDavis = new XMLHttpRequest()




// var urlMetraWilmette = "https://maps.googleapis.com/maps/api/directions/json?origin=Wilmette,IL&destination=Ogilvie%20Transportation%20Center&language=en&mode=transit&transit_mode=train&alternatives=true&key=" + googleapi

// requestWilmette.open('GET', urlMetraWilmette, true)
// requestWilmette.send()








// var urlMetraDavis = "https://maps.googleapis.com/maps/api/directions/json?origin=Davis%20Station%20Evanston&destination=Ogilvie%20Transportation%20Center&language=en&mode=transit&transit_mode=train&alternatives=true&key=" + googleapi

// requestDavis.open('GET', urlMetraDavis, true)
// requestDavis.send()

// requestWilmette.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (requestWilmette.status >= 200 && requestWilmette.status < 400) {


//   } else {
//     console.log('error')
//   }
// }


// requestDavis.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
//   if (requestDavis.status >= 200 && requestDavis.status < 400) {
//     data.route.forEach(route => {
//       const NextWilmette = document.createElement('h3')
//       NextWilmette.textContent = 'Next train: '.concat(route.departure_time)
//       theMetra.appendChild(NextWilmette)
//     })

//   } else {
//     console.log('error')
//   }
// }