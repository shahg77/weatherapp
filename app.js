const Api_key ="bcc7e434b434ff95c2a5dc10990f8495"
const form = document.querySelector("#my_form");  
const input = document.querySelector("#city_input");
const temp = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");
const description = document.querySelector("#description");
const wind = document.querySelector("#wind");

const formHandler = async (event) =>{
  try {
    event.preventDefault();

    message.innerText = "loading...";
    temp.innerText = "";
    humidity.innerText = "";
    description.innerText = "";
    wind.innerText ="";
    
    const city = input.value;
    const response = await axios 
    (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
    


    message.innerText = "";
    temp.innerText = ` ${response.data.main.temp}°C`;
    humidity.innerText = `Humidity: ${response.data.main.humidity}%`;
    description.innerText = ` ${response.data.weather[0].description}`
    wind.innerText = `wind: ${response.data.wind.speed}Km/h`;

   console.log("🚀 ~ formHandler ~ response:", response.data);
  } catch (error) {
        console.log(error);

    message.innerText = error?.response?.data?.message || "unknown error";
  }
}
form.addEventListener("submit", formHandler);