import React, { useState, useEffect} from 'react'
import {useAlert} from 'react-alert'
import { useHistory } from 'react-router'

import CenteredLayout from 'components/CenteredLayout'
import RGrid from 'components/RGrid'
import RCard from 'components/RCard'

import configuration from 'configuration'
import routes from 'routes'

const Sector = () => {
    const alert = useAlert();
    const [sectors,setSectors] = useState([]);
    const history = useHistory();
    useEffect(()=>{
            fetch(configuration.apiBaseUrl+'sector', {credentials: 'include' })
            .then(response=> response.json())
            .then(data=>setSectors(data))
            .catch(error=>{
                alert.error('error de conexion intentelo mas tarde.')
            })
        },
        [alert]
    )

    return (
    <CenteredLayout scrolleable={true}>
        <div>
            <h2 style={{marginTop: '2.5em',marginLeft: '2.5em',color: 'gray',fontWeight: 'normal'}}>Elija el rubro de su preferencia .. </h2>
            <RGrid>
            {sectors.map((sector,i)=><RCard key={i} src={sector} action={()=>{history.push(routes.category+`/${sector.id}`)}}/>)}
            </RGrid>
        </div>
    </CenteredLayout>
    )
}

export default Sector;