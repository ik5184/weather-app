const apikey="2728f247cb5dd207e23d4a145603f717";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.getElementById('getcity');
const searchbtn=document.getElementById('btn');
const icon=document.getElementsByClassName('imgicon')[0];


async function checkweathr(city){

    const response=await fetch(apiurl+ city + `&appid=${apikey}`);
    var data= await response.json();
    if(response.status==404){
        document.getElementsByClassName('weather')[0].style.display='none';
        alert("You have entered the Invalid City name");
    }
    console.log(data);
   
    document.getElementsByClassName("city")[0].innerHTML=data.name;
    document.getElementsByClassName("temp")[0].innerHTML=Math.round(data.main.temp) +'°C';
    document.getElementsByClassName("humidity")[0].innerHTML=data.main.humidity +"%";
    document.getElementsByClassName("wind")[0].innerHTML=data.wind.speed +' kmp';

    if(data.weather[0].main=="Clouds"){
        icon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        icon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="mist.png";
    }
    document.getElementsByClassName('weather')[0].style.display='block';
}
searchbtn.addEventListener("click",()=>{

    checkweathr(searchbox.value);
   
})