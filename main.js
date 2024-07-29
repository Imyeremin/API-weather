const apiKey = "f86a408c1e5a6ebd1e5c569b56031e69";
//  const apiURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;



const start = document.getElementById("sub");
start.onclick = async (e) => {
  e.preventDefault();
  console.log('--------------------------------------------------------------------')
  const city = getData();
  const dataApi = await run(city);
  console.log(dataApi)
  const dataApi2 = await run2(city);
  console.log(dataApi2)
  creatingPages(dataApi, dataApi2);
};

const getData = () => {
  const city = document.getElementById("cityName").value;
  return city;
};

const run = async (city) => {
  let resp = null;
  try {
    resp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    );  
  } catch (e) {
    console.log(e);
    return;
  }
  return resp.json();
};
const run2 = async (city) => {
  let resp = null;
  try {
    resp = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
  } catch (e) {
    console.log(e);
    return;
  }
  return resp.json();
};
const creatingPages = (data, dataNow) => {
  let x = new Date();
  const container = document.getElementById("container");
  container.innerHTML = `<div class="container bg-light p-3 mb-3">
      <div class="head fs-5 p-1 d-flex justify-content-between">
        <div>CURRENT WEATHER</div>
        <div>${x.toLocaleDateString()}</div>
      </div>
      <div class="content d-flex alight-item-center justify-content-around">
        <div>
          <img width="100px" src="http://openweathermap.org/img/w/${
            dataNow.weather[0].icon
          }.png" alt="" />
          <span class="d-block text-center">${dataNow.weather[0].main}</span>
        </div>
        <div>
          <span class="fs-1">${Math.floor(dataNow.main.temp - 273)}°C</span>
          <span class="fs-6 fw-light d-block">Real Feel ${Math.floor(dataNow.main.feels_like - 273)}°C</span>
        </div>
        <div>
          <span class="fs-5 d-block">Sunrise: ${dataNow.sys.sunrise} AM</span>
          <span class="fs-5 d-block">Sunset:  ${dataNow.sys.sunset} AM</span>
          <span class="fs-5 d-block">Duration:${1} AM</span>
        </div>
      </div>
    </div>

    <div class="container bg-light p-3 mb-3">
      <div class="head fs-5 p-1 d-flex justify-content-between">
        <div>HOURLY</div>
      </div>
      <div class="content d-flex alight-item-center justify-content-around">
        <div class="container">
          <table class="text-center table">
            <thead>
              <tr>
                <th scope="col">TODAY</th>
                <th scope="col">${data.list[0].dt_txt}</th>
                <th scope="col">${data.list[1].dt_txt}</th>
                <th scope="col">${data.list[2].dt_txt}</th>
                <th scope="col">${data.list[3].dt_txt}</th>
                <th scope="col">${data.list[4].dt_txt}</th>
                <th scope="col">${data.list[5].dt_txt}</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th scope="row"></th>
                <td><img width="100px" src="http://openweathermap.org/img/w/${
                  data.list[0].weather[0].icon
                }.png" alt="" /></td>
                <td><img width="100px" src="http://openweathermap.org/img/w/${
                  data.list[1].weather[0].icon
                }.png" alt="" /></td>
                <td><img width="100px" src="http://openweathermap.org/img/w/${
                  data.list[2].weather[0].icon
                }.png" alt="" /></td>
                <td><img width="100px" src="http://openweathermap.org/img/w/${
                  data.list[3].weather[0].icon
                }.png" alt="" /></td>
                <td><img width="100px" src="http://openweathermap.org/img/w/${
                  data.list[4].weather[0].icon
                }.png" alt="" /></td>
                <td><img width="100px" src="http://openweathermap.org/img/w/${
                  data.list[5].weather[0].icon
                }.png" alt="" /></td>
              </tr>

              <tr>
                <th class="fw-light" scope="row">Forecast</th>
                <td>${data.list[0].weather[0].main}</td>
                <td>${data.list[1].weather[0].main}</td>
                <td>${data.list[2].weather[0].main}</td>
                <td>${data.list[3].weather[0].main}</td>
                <td>${data.list[4].weather[0].main}</td>
                <td>${data.list[5].weather[0].main}</td>
              </tr>

              <tr>
                <th class="fw-light" scope="row">Temp(°C)</th>
                <td>${Math.floor(data.list[0].main.temp - 273)} °C</td>
                <td>${Math.floor(data.list[1].main.temp - 273)} °C</td>
                <td>${Math.floor(data.list[2].main.temp - 273)} °C</td>
                <td>${Math.floor(data.list[3].main.temp - 273)} °C</td>
                <td>${Math.floor(data.list[4].main.temp - 273)} °C</td>
                <td>${Math.floor(data.list[5].main.temp - 273)} °C</td>
              </tr>
              <tr>
                <th class="fw-light" scope="row">RealFeel</th>
                <td>${Math.floor(data.list[0].main.feels_like - 273)} °C</td>
                <td>${Math.floor(data.list[1].main.feels_like - 273)} °C</td>
                <td>${Math.floor(data.list[2].main.feels_like - 273)} °C</td>
                <td>${Math.floor(data.list[3].main.feels_like - 273)} °C</td>
                <td>${Math.floor(data.list[4].main.feels_like - 273)} °C</td>
                <td>${Math.floor(data.list[5].main.feels_like - 273)} °C</td>
              </tr>
              <tr>
                <th class="fw-light" scope="row">Wind(km/h)</th>
                <td>${(Math.floor(data.list[0].wind.speed) * 3600) / 1000}</td>
                <td>${(Math.floor(data.list[1].wind.speed) * 3600) / 1000}</td>
                <td>${(Math.floor(data.list[2].wind.speed) * 3600) / 1000}</td>
                <td>${(Math.floor(data.list[3].wind.speed) * 3600) / 1000}</td>
                <td>${(Math.floor(data.list[4].wind.speed) * 3600) / 1000}</td>
                <td>${(Math.floor(data.list[5].wind.speed) * 3600) / 1000}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="container bg-light p-3 mb-3">
      <div class="head fs-5 p-1 d-flex justify-content-between">
        <div>NERBY PLACES</div>
      </div>
      <div
        class="content-citys d-flex alight-item-center justify-content-around"
      >
        <div>
          <div class="w-auto row d-flex justify-content-between">
            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="sun.png" alt="" /> ${1}°C</span>
            </div>

            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="sun.png" alt="" /> ${1}°C</span>
            </div>

            <div class="w-100 d-none d-md-block"></div>

            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="sun.png" alt="" /> ${1}°C</span>
            </div>

            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="sun.png" alt="" /> ${1}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

// let x = new Date()
// undefined
// x.toLocaleDateString()
// '20.07.2024'
// x.toLocaleTimeString()
// '22:38:42'
window.onload = async () =>{
  const startData = await run('Рязань');
const startData2 = await run2('Рязань')
console.log(startData)
console.log(startData2)
creatingPages(startData, startData2);
}
