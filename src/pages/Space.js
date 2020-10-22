import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'

import CenteredLayout from 'components/CenteredLayout'
import PlacesMap from 'components/PlacesMap'
import SpaceDetail from 'components/SpaceDetail'
import configuration from 'configuration'

const Space = ()=>{
    const alert = useAlert();
    const [spaces, setSpaces] = useState([]);
    const [currentSpace, setCurrentSpace] = useState();
    const { categoryId } = useParams()

    useEffect(
        ()=>{
            fetch(configuration.apiBaseUrl+'space/category/'+categoryId, {credentials: 'include' })
            .then(response=> response.json())
            .then(data=>{
                setSpaces(data);
                setCurrentSpace(data[0]);
            })
            .catch(error=>{
                alert.error('error de conexion intentelo mas tarde.')
            })
        },
        [alert,categoryId]
    )

    return (
        <CenteredLayout scrolleable={true}>
            <div>
                <h2 style={{marginTop: '2.5em',marginLeft: '2.5em',color: 'gray',fontWeight: 'normal'}}>Estos son los locales que encontramos cerca de tu zona!</h2>
                <div style={{display: 'flex'}}>
                    <PlacesMap places={spaces} placeCallback={setCurrentSpace} height={500} width={500} />
                    <SpaceDetail space={currentSpace}/>
                </div>
                
            </div>    
        </CenteredLayout>
    )
}

export default Space;