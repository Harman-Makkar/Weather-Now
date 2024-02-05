let city = "";

document.getElementById('data').addEventListener('change', (e) => {
  city = e.target.value;
});


document.getElementById('btn').addEventListener('click', async () => {
  document.getElementById("load").style.visibility = "visible";

  let Fetch = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${city}&key=e27334172f8743828b8172837231108`);
  let data = await Fetch.json();
  console.log(data);
  document.getElementById("load").style.visibility = "hidden";

  document.getElementsByClassName("weather")[0].classList.remove("loading");

  document.getElementsByClassName("temp")[0].innerHTML = data.current.temp_c;
  document.getElementsByClassName("city")[0].innerHTML = data.location.name;
  document.getElementsByClassName("cloud")[0].innerHTML = data.current.condition.text;
  document.getElementsByClassName("humidity")[0].innerHTML = data.current.humidity;
  document.getElementsByClassName("wind")[0].innerHTML = data.current.wind_kph;
  document.getElementsByClassName("sunny")[0].innerHTML = data.current.feelslike_c;

});

const btn = document.querySelector('#btn');
console.log(btn);


