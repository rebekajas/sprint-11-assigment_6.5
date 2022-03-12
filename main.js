fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=*****"

)
.then((response) => response.json())
.then((data) =>console.log(data))
.catch((err) =>console.log(err));
