// using openweather.org 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import {use, useState} from "react";

export default function SearchBox({ updateInfo}) {

    let [city, setCity] = useState("");
    let [error , setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // trimmed after the qn mark in the original API
    const API_KEY = "abd6abfafda866c6d15119115cf87823";

    let getWeatherInfo = async() =>{

        try{
            let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // after the qn mark written the text to fetch here 
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {  // we here see the info commin from the api request as a object
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            pressure : jsonResponse.main.pressure,
            humidity: jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
            windSpeed : jsonResponse.wind.speed,
            };
            console.log(result);
            return result;

        }catch(err){
            throw err;

        }
      
    }
   
    let handleChange = (evt) =>{
        setCity(evt.target.value);

    };

    let handleSubmit = async(evt) =>{ // what will happen after the submit button is clicked
        try{
            evt.preventDefault();
            console.log(city);
            setError(false); 
            setCity("");
            let newInfo =  await getWeatherInfo(); 
            updateInfo(newInfo);
        }catch(err){
            setError(true)
        }
        
    };
    
    return (
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="Search Location" 
            variant="outlined" 
            required  
            value={city}
            onChange={handleChange}
            />
            <br></br>
            <br></br>
            <Button  type='submit' variant="contained" color="success" endIcon={<SendIcon />}>
               Search
            </Button>
            {error && <p style={{color:"red"}}>No such place in our API</p>}
            </form>
        </div>
    );
}