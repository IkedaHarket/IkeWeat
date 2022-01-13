import React,{useState} from 'react'

import SimpleCard from './components/SimpleCard/SimpleCard';
import Buscador from './components/Buscador/Buscador';
import Titulo from './components/Titulo/Titulo';
import MainCard from './components/MainCard/MainCard';

const IkeWeat = () => {

    const [weatherDay, setWeatherDay] = useState(false);
    const [weatherWeek, setWeatherWeek] = useState({});

    return (
        <div className="container-main p-grid p-align-center p-p-4" color='red'>
            {/* <Titulo /> */}
            <div className='p-col-12 p-d-flex p-jc-center'>
                    <Buscador setWeatherDay={setWeatherDay} setWeatherWeek={setWeatherWeek} />
            </div>

            <div className="p-col-12 ">
                <div className='p-grid p-justify-center'>
                        {
                            (weatherDay)&&<MainCard weatherDay={weatherDay} />
                        }
                </div>
            </div>
            
            <div className="p-col">
                <div className='p-grid p-justify-center	'>
                {
                    weatherWeek?.list?.map((weather,index) => ( index % 8 === 0) &&<SimpleCard key={index} weather={weather}/> )
                }
                </div>
            </div>
        </div>
    )
}

export default IkeWeat
