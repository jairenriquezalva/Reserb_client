import React, { useState } from 'react'
import {useHistory} from "react-router-dom";
import {useAlert} from 'react-alert'
//components
import CenteredLayout from 'components/CenteredLayout'
import FormContainer from 'components/FormContainer'
import Title from 'components/Title'
import RLabel from 'components/RLabel'
import RInput from 'components/RInput'
//js objects
import configuration from 'configuration'
import routes from 'routes'
import sessionData from 'sessionData'


const Login = (props) => {

    const alert = useAlert();
    const history = useHistory();
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const setEventValue = (setter,event)=>{
        setter(event.target.value);
    }

    const handleEmailInput = (event)=>{
        setEventValue(setEmail,event)
    }
  
    const handlePasswordInput = (event)=>{
        setEventValue(setPassword,event)
    }

    const loginRequest = ()=>{
        let data = {
            eMail: email,
            password: password,
        }
        fetch(configuration.apiBaseUrl+"login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data=>
            {
                if(data.status==="success"){
                    setTimeout(_=>history.push(routes.home),2000)
                    sessionData.email = data.customer.eMail;
                    alert.info("Se ha iniciado sesion correctamente.")
                }
                else
                    throw new Error()
            })
        .catch(err=>{
            alert.error('Contacte con el administrador');
        })
    }

    const submit = (e)=>{
        e.preventDefault();
        loginRequest();
    }

    return (
        <CenteredLayout height={props.height}>
            <FormContainer onSubmit={submit}>
                <Title>Log in now</Title>
                <RLabel>Email</RLabel>
                <RInput type="text" onKeyUp={handleEmailInput}/>
                <RLabel>Password</RLabel>
                <RInput type="password" onKeyUp={handlePasswordInput}/>
                <RInput type="submit" value="Login"/>
            </FormContainer>
        </CenteredLayout>
    )
}

export default Login