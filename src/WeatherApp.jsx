import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState({ // creating sample 
        city : "delhi",
        feelsLike : 24.94,
        tempMin : 24.94,
        tempMax: 24.94,
        temp : 24.94,
        humidity : 43,
        weather : "haze"

    });
    let updateInfo = (newInfo)=>{ // getting the result and 
        setweatherInfo(newInfo);

    }
    return(
        <div>
            <h2>Weather App by Avinav</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
        
    )
}