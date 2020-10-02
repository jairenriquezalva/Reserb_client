import React, { useState, useEffect} from 'react'
import {useAlert} from 'react-alert'

import CenteredLayout from 'components/CenteredLayout'
import RGrid from 'components/RGrid'
import RCard from 'components/RCard'


import configuration from 'configuration'

const Home = () => {
    const alert = useAlert();
    const [sectors,setSectors] = useState([]);
    
    useEffect(()=>{
        if(sectors.length === 0){
            fetch(configuration.apiBaseUrl+'sector')
            .then(response=>response.json())
            .then(data=>{
                setSectors(data)
            })
            .catch(error=>{
                alert.error('error de conexion intentelo mas tarde.')
            })
        }
    })
    return (
    <CenteredLayout scrolleable={true}>
        <div>
            <h2 style={{marginTop: '2.5em',marginLeft: '2.5em'}}>Elija el rubro de su preferencia .. </h2>
            <RGrid>
            {sectors.map((sector,i)=><RCard key={i} src={sector}/>)}
            </RGrid>
        </div>
    </CenteredLayout>
    )
}

export default Home;