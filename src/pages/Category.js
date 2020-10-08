import React, { useState, useEffect } from 'react'
import {useAlert} from 'react-alert'

import CenteredLayout from 'components/CenteredLayout'
import RGrid from 'components/RGrid'
import RCard from 'components/RCard'

import configuration from 'configuration'
import { useParams } from 'react-router';

const Category = ()=>{
    const alert = useAlert();
    const [categories,setCategories] = useState([]);
    const {sectorId} = useParams();
    useEffect(()=>{
        fetch(configuration.apiBaseUrl+'category/'+sectorId, {credentials: 'include' })
        .then(response=> response.json())
        .then(data=>setCategories(data))
        .catch(error=>{
            alert.error('error de conexion intentelo mas tarde.')
        })
    },[])

    return (
        <CenteredLayout scrolleable={true}>
        <div>
            <h2 style={{marginTop: '2.5em',marginLeft: '2.5em',color: 'gray',fontWeight: 'normal'}}>Elija la categoria .. </h2>
            <RGrid>
            {categories.map((category,i)=><RCard key={i} src={category}/>)}
            </RGrid>
        </div>
        </CenteredLayout>
    )
}

export default Category;