import React,{useEffect, useState} from 'react'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';


const APIKeyOpenWeather = '105db8eac87116aba944ac1a740cf192';
const APIOpenWeather    = 'https://api.openweathermap.org/data/2.5/';


const Buscador = ({setWeatherDay,setWeatherWeek}) => {

    const [query, setQuery] = useState('')

    const buscar = (e)=>{
        e.preventDefault()
        if(query.length < 3) return
        getWeatherDay(query);
        getWeatherWeek(query);
    }

    const getWeatherDay = async(q)=>{
        const resp = await fetch(`${APIOpenWeather}weather?q=${q}&appid=${APIKeyOpenWeather}&units=metric`);
        const data = await resp.json();
        setWeatherDay( data );
    }
    const getWeatherWeek = async(q)=>{
        const resp = await fetch(`${APIOpenWeather}forecast?q=${q}&appid=${APIKeyOpenWeather}&units=metric`);
        const data = await resp.json();
        setWeatherWeek( data );
    }

    useEffect(() => {

        const getDataPais= async()=>{
            const resp = await fetch('http://ip-api.com/json');
            const pais = await resp.json();
            await getWeatherDay(pais.city)
            await getWeatherWeek(pais.city)
        }
        getDataPais();
        
    }, [])
    
    return (
        <form className='p-col-12 p-xl-6 p-d-flex p-jc-center' onSubmit={buscar}>
            <InputText 
                className='p-col-6 p-mr-2' 
                onChange={(e) => setQuery(e.target.value)}
                value={query} 
                placeholder='Buscar...'
                />


            <Button 
                className='p-col-3' 
                label="Buscar" 
                icon="pi pi-search"
                 />
        </form>
    )
}

export default Buscador
