const apiKey = "f86a408c1e5a6ebd1e5c569b56031e69";
// const apiURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;
let days = null;
let dataFeatch = [];
const arrDays = ["1", "2", "3", "4", "5", "6", "7"];
window.onload = async () => {
  const startData = await run("Рязань");
  const startData2 = await run2("Рязань");
  dataFeatch = [startData, startData2];
  console.log(startData);
  console.log(startData2);
  console.log(dataFeatch);
  creatingPages(startData, startData2);
};

const start = document.getElementById("sub");
start.onclick = async (e) => {
  e.preventDefault();
  console.log(
    "--------------------------------------------------------------------"
  );
  const city = getData();
  const dataApi = await run(city);
  console.log(dataApi);
  const dataApi2 = await run2(city);
  console.log(dataApi2);
  dataFeatch = [dataApi, dataApi2];
  console.log(dataFeatch);
  creatingPages(dataApi, dataApi2);
};

const getData = () => {
  const city = document.getElementById("cityName").value;
  const cityHeader = document.querySelector(".navbar-brand");
  cityHeader.innerText = city;
  return city;
};

const run = async (city) => {
  let resp = null;
  try {
    resp = await fetch();
    // `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
  } catch (e) {
    const container = document.getElementById("container");
    container.innerHTML = `
  <div height="100vh" class="error">
  <img width="100%" height="100%" src="scale_1200.png" alt="" />
  </div>
  `;
    return;
  }
  return resp.json();
};
const run2 = async (city) => {
  let resp = null;
  try {
    resp = await fetch();
    // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  } catch (e) {
    const container = document.getElementById("container");
    container.innerHTML = `
  <div height="100vh" class="error">
  <img width="100%" height="100%" src="scale_1200.png" alt="" />
  </div>
  `;
    return;
  }
  return resp.json();
};
const creatingPages = (data, dataNow) => {
  let x = new Date();
  const cityHeader = document.querySelector(".navbar-brand");
  cityHeader.innerText = data.city.name;
  const container = document.getElementById("container");
  container.innerHTML = `<div class="container bg-light p-3 mt-3 mb-3">
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
          <span class="fs-6 fw-light d-block">Real Feel ${Math.floor(
            dataNow.main.feels_like - 273
          )}°C</span>
        </div>
        <div>
          <span class="fs-5 d-block">Sunrise: ${new Date(
            dataNow.sys.sunrise * 1000
          ).toLocaleTimeString()} </span>
          <span class="fs-5 d-block">Sunset:  ${new Date(
            dataNow.sys.sunset * 1000
          ).toLocaleTimeString()} </span>
          <span class="fs-5 d-block">Duration:${new Date(
            (dataNow.sys.sunset - dataNow.sys.sunrise) * 1000
          ).toLocaleTimeString()} </span>
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
                <th scope="col">${new Date(
                  data.list[0].dt * 1000
                ).toLocaleTimeString()}</th>
                <th scope="col">${new Date(
                  data.list[1].dt * 1000
                ).toLocaleTimeString()}</th>
                <th scope="col">${new Date(
                  data.list[2].dt * 1000
                ).toLocaleTimeString()}</th>
                <th scope="col">${new Date(
                  data.list[3].dt * 1000
                ).toLocaleTimeString()}</th>
                <th scope="col">${new Date(
                  data.list[4].dt * 1000
                ).toLocaleTimeString()}</th>
                <th scope="col">${new Date(
                  data.list[5].dt * 1000
                ).toLocaleTimeString()}</th>
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
              <span> <img width="50px" src="" alt="" /> ${1}°C</span>
            </div>

            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="" alt="" /> ${1}°C</span>
            </div>

            <div class="w-100 d-none d-md-block"></div>

            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="" alt="" /> ${1}°C</span>
            </div>

            <div
              class="flex-fill m-1 p-2 bg-opacity-10 bg-secondary col-6 col-sm-4 d-flex justify-content-between"
            >
              <span>${1}</span>
              <span> <img width="50px" src="" alt="" /> ${1}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};

const btnToday = document.getElementById("btn-today");
const btnDays = document.getElementById("btn-days");

btnDays.onclick = async () => {
  creatingPagesDays(dataFeatch[0], dataFeatch[1]);
  initDays();
};
btnToday.onclick = () => {
  creatingPages(dataFeatch[0], dataFeatch[1]);
};

const creatingPagesDays = (data, dataNow) => {
  const containerDays = document.getElementById("container-days");
  container.innerHTML = ` <div class="container p-3 mt-3 mb-3 d-flex">
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
        <div class="card day" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title head">TONIGHT</h5>
            <h6 class="card-text">JUN 30</h6>
            <img src="..." class="card-img-top" alt="..." />
            <h3 class="card-title">25 C</h3>
            <p class="card-text">Clear, Warm</p>
          </div>
        </div>
      </div>
      <div class="container initday bg-light p-3 mb-3">
        <div class="head fs-5 p-1 d-flex justify-content-between">
          <div>HOURLY</div>
        </div>
        <div class="content d-flex alight-item-center justify-content-around">
          <div class="container">
            <table class="text-center table">
              <thead>
                <tr>
                  <th scope="col">TODAY</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <th scope="row"></th>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                </tr>

                <tr>
                  <th class="fw-light" scope="row">Forecast</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <th class="fw-light" scope="row">Temp(°C)</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th class="fw-light" scope="row">RealFeel</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th class="fw-light" scope="row">Wind(km/h)</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`;
  days = document.querySelectorAll(".day");
  console.log(days);
};
const initDays = () => {
  const contentDay = document.querySelector(".initday");
  days.forEach((day, i) => {
    day.onclick = () => {
      contentDay.innerHTML = `<div class="head fs-5 p-1 d-flex justify-content-between">
          <div>${i}</div>
        </div>
        <div class="content d-flex alight-item-center justify-content-around">
          <div class="container">
            <table class="text-center table">
              <thead>
                <tr>
                  <th scope="col">TODAY</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                  <th scope="col">1</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <th scope="row"></th>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                  <td><img width="100px" src="" alt="" /></td>
                </tr>

                <tr>
                  <th class="fw-light" scope="row">Forecast</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <th class="fw-light" scope="row">Temp(°C)</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th class="fw-light" scope="row">RealFeel</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th class="fw-light" scope="row">Wind(km/h)</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>`;
    };
  });
};




// TEST

// TEST
