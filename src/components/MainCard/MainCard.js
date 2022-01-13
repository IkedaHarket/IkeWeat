import React from 'react'

import { Card } from 'primereact/card';

import moonAndClouds from '../../images/moonAndClouds.svg'
import { imageSelectorWeather } from '../../helpers/imageSelectorWeather';

const MainCard = ({weatherDay}) => {

    const nameDayOfWeek = ()=>{
        let a = new Date();
        switch (a.getDay()) {
            case 0:
                return 'Domingo'
            case 1:
                return 'Lunes'
            case 2:
                return 'Martes'
            case 3:
                return 'Miércoles'
            case 4:
                return 'Jueves'
            case 5:
                return 'Viernes'
            case 6:
                return 'Sábado'
            default:
                return 'Dia'
        }
    }
    if(weatherDay.cod === '404'){
        const header = (<img alt="Card" src={imageSelectorWeather('404')} />)
        return(
        <Card
            className='p-col p-md-4 p-xl-3 p-order-2 p-order-md-1  p-shadow-20'
            title='Ciudad no encontrada'
            header={header}
        >
            
        </Card>)
    }

    const header = (
        <>
        <h2>{nameDayOfWeek()}</h2>
        <img alt="Card" src={imageSelectorWeather(weatherDay.weather[0]?.main)} />
        </>
    );

    
    const footer = (
        <>
            <small>{weatherDay.name},{weatherDay.sys?.country}</small>
        </>
    ); 

    return (
        <Card title={`${Math.round(weatherDay.main?.temp * 10)/10}°C`} 
        // subTitle={subtitle} 
        className='p-col p-md-4 p-xl-3 p-order-2 p-order-md-1  p-shadow-20'
        header={header}
        footer={footer}
        >
            
            
        </Card>
    )
}

export default MainCard
