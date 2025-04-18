document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'b70496d4064501a25ab9fa1242646ba9'; // Замените YOUR_API_KEY на ваш реальный API ключ
    const city = 'Санкт-Петербург'; // Город для прогноза
    const url = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=ru`);
    const header = document.getElementById('header');
    const weatherIcon = document.getElementById('img');
    const pWeath = document.getElementById('weather');
    const pTemp =document.getElementById('temperature');

    async function getForecast() {
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Ошибка в ${response.status}`)
            }
            const data = await response.json();
            console.log(data);

            header.innerText = city;
            const weatherNow = data.list[0].weather[0].description;
            pWeath.innerText = weatherNow;
            const currentTemp = data.list[0].main.temp.toFixed(0) + '&deg;';
            pTemp.innerHTML = currentTemp;

            switch(weatherNow) {
                case 'пасмурно': weatherIcon.src = '04d.png'; break;
                case 'дождь': weatherIcon.src = '09d.png'; break;
                case 'небольшой дождь': weatherIcon.src = '10d.png'; break;
                case 'переменная облачность': weatherIcon.src = '02d.png'; break;
                case 'небольшая облачность': weatherIcon.src = '02d.png'; break;
                case 'облачно с прояснениями': weatherIcon.src = '02d.png'; break;
                case 'ясно': weatherIcon.src = '01d.png'; break;
                case 'небольшой снег': weatherIcon.src = '13d.png'; break;
                case 'снег': weatherIcon.src = '13d.png'; break;
                case 'гроза': weatherIcon.src = '11d.png'; break;
                case 'туман': weatherIcon.src = '50d.png'; break;
            }
            displayForecast(data.list);

        } catch (error) {
            console.error(error)
        }
    }

    function displayForecast(forecast) {
        const forecastContainer = document.getElementById('forecast__container');
        forecastContainer.innerHTML = '';

        const uniqueTimes = new Set();

        for (const elem of forecast) {
            const date = new Date(elem.dt * 1000);
            const timeString = date.toLocaleTimeString([], { hour: '2-digit' });
            
            if(!uniqueTimes.has(timeString)) {
                uniqueTimes.add(timeString);

                const divItem = document.createElement('div');
                divItem.className = 'item';

                const time = document.createElement('div');
                time.className = 'timeItem'
                time.innerText = timeString;
                const temp = document.createElement('div');
                temp.className = 'tempItem';
                temp.innerHTML = elem.main.temp.toFixed(0) + '&deg;';
                const iconDescr = document.createElement('img');
                iconDescr.className = 'iconItem';

                const weathItemIcon = elem.weather[0].description;
                switch(weathItemIcon) {
                    case 'дождь':  iconDescr.src= '09d.png'; break;
                case 'пасмурно': iconDescr.src = '04d.png'; break;
                case 'небольшой дождь': iconDescr.src = '09d.png'; break;
                case 'переменная облачность': iconDescr.src = '02d.png'; break;
                case 'небольшая облачность': iconDescr.src = '02d.png'; break;
                case 'облачно с прояснениями': iconDescr.src = '02d.png'; break;
                case 'ясно': iconDescr.src = '01d.png'; break;
                case 'небольшой снег': iconDescr.src = '13d.png'; break;
                case 'снег': iconDescr.src = '13d.png'; break;
                case 'гроза': iconDescr.src = '11d.png'; break;
                case 'туман': iconDescr.src = '50d.png'; break;
                } 

                divItem.appendChild(time);
                divItem.appendChild(temp);
                divItem.appendChild(iconDescr);
                forecastContainer.appendChild(divItem);
            }
        }
    }
getForecast();
})
