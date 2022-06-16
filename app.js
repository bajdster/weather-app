const weatherButton = document.querySelector(".weatherButton");
const cityInput = document.querySelector(".cityInput");
const info = document.querySelector('.info');


const cities = [];  


function checkWeather(e)
{
    e.preventDefault();  

    console.log(cities);


        let cityValue = cityInput.value;

        cities.filter((city)=> 
        {
            if(city.stacja == cityValue)
            {
                info.innerHTML = `<p>Pogoda dla 
                ${city.stacja}
                </p>
                <p>${city.data_pomiaru}</p>
                <p>Temperatura <span class = "details"> ${city.temperatura}°C </span></p>
                <p>Ciśnienie <span class = "details"> ${city.cisnienie} hPa</span></p>
                <p>Suma opadu <span class = "details"> ${city.suma_opadu}</span></p>
                `
            }
        })


}
window.addEventListener("load", function()
{
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
    .then(response => 
        {
            if(response.ok)
            {
            return response.json();
            }
            else
            {
                throw new Error(Error);
            }
            
        })
        .then(data => cities.push(...data));
})
weatherButton.addEventListener("click", checkWeather)
// cdn
