import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";


export default function InfoBox({info}){

    const INIT_URL = 
           "https://media.istockphoto.com/id/1231763508/photo/beijing-liangmaqiao-skyline.webp?a=1&b=1&s=612x612&w=0&k=20&c=2IVoaUY0H_SFG5_otr9alz2-9tA_wGTNOaaAVrI3Rk0="

    let COLD_URL = "https://images.unsplash.com/photo-1671781165154-b901ccc51dff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYXNvbkNvbGR8ZW58MHx8MHx8fDA%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3Vubnl8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";


    return (
        <div>
                
            <Card className="weather-card">
            <CardMedia
                sx={{ height: 140 }}
                image={
                    (info.humidity > 75 && info.temp > 25)
                    ? RAIN_URL 
                    : (info.temp > 20) 
                    ? HOT_URL 
                    : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color='Blue'>
                {info.city} {
                   ( info.humidity > 75 && info.temp > 25)
                    ? <ThunderstormIcon/>
                    : (info.temp > 15) 
                    ? <WbSunnyIcon/>
                    : <SevereColdIcon/>
                    }
                </Typography>
                <Typography variant="body2" color='text.secondary' component={"span"}  >

                <div>Temperature = {info.temp}&deg;C</div>
                <div>Feels Like = {info.feelsLike}&deg;C</div>
                <div>Minimum Temparature = {info.tempMin}&deg;C</div>
                <div>Maximum Temperature = {info.tempMax}&deg;C</div>
                <div>Humidity = {info.humidity}﹪</div>
                <div>Weather feels like <i>{info.weather} </i></div>
                </Typography>
            </CardContent>
           
            </Card>
        </div>
    )
}