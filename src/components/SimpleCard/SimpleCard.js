import React from 'react'
import { Card } from 'primereact/card';
import { imageSelectorWeather } from '../../helpers/imageSelectorWeather';

const SimpleCard = ({weather}) => {

    const nameDayOfWeek = ()=>{
        const fechaComoCadena = weather.dt_txt; 
        const dias = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
        const numeroDia = new Date(fechaComoCadena).getDay();
        return dias[numeroDia];
    }

    

    const header = (
        <>
        <h2>{nameDayOfWeek()}</h2>
        <img alt="Card" src={imageSelectorWeather(weather.weather[0]?.main)} />
        </>
    );
    return (
        <Card 
        title={`${Math.round(weather.main?.temp * 10)/10}°C`}  
        header={header}
        className="p-col-12 p-md-5 p-xl-2 p-m-3 p-shadow-20 ">
        </Card>
    )
}

export default SimpleCard
