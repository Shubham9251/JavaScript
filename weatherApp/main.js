const apiKey = "7c1e637689921e86ef5799996a2ed7e0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>c`
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
    document.querySelector('.wind').innerText = `${data.wind.speed} kh/h`

}

btn.addEventListener("click", () => {
    let city = input.value;
    
    checkWeather(city);
})

