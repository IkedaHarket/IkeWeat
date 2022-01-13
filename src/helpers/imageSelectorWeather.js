import sun from '../images/Sun.svg'
import snow from '../images/Snow.svg'
import cloud from '../images/Cloud.svg'
import rain from '../images/Rain.svg'
import moonAndClouds from '../images/moonAndClouds.svg'

export const imageSelectorWeather = (value)=>{

    switch (value) {
        case 'Rain':
            return rain;
        case 'Clear':
            return sun;
        case 'Clouds':
            return cloud;
        case 'Snow':
            return snow; 
        default:
            return moonAndClouds;
    }


}