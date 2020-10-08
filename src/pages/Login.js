import React, { useState } from 'react'
import {useHistory} from "react-router-dom";
import {useAlert} from 'react-alert'
//components
import CenteredLayout from 'components/CenteredLayout'
import FormContainer from 'components/FormContainer'
import Title from 'components/Title'
import RLabel from 'components/RLabel'
import RInput from 'components/RInput'
import DefaultLink from 'components/DefaultLink'
//js objects
import configuration from 'configuration'
import routes from 'routes'
import { useSession } from 'hooks/Session';
import sessionStorageManager from 'hooks/sessionStorageManager';


const Login = (props) => {

    const session = useSession();
    const alert = useAlert();
    const history = useHistory();
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [submitStatus,setSubmitStatus] = useState(true);

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
        setSubmitStatus(false);
        let data = {
            eMail: email,
            password: password,
        }
        fetch(configuration.apiBaseUrl+"login",{
            credentials: 'include',
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
                    setTimeout(_=>{history.push(routes.home);setSubmitStatus(true);},2000)
                    session.setSessionData(data.eMail);
                    alert.info("Se ha iniciado sesion correctamente.")
                }
                else
                    throw new Error()
            })
        .catch(err=>{
            alert.error('Contacte con el administrador');
        });
    }

    const submit = (e)=>{
        e.preventDefault();
        if(submitStatus)
        loginRequest();
    }

    return (
        <CenteredLayout >
            <FormContainer onSubmit={submit}>
                <Title>Log in</Title>
                <RLabel>Email</RLabel>
                <RInput type="text" onKeyUp={handleEmailInput}/>
                <RLabel>Password</RLabel>
                <RInput type="password" onKeyUp={handlePasswordInput}/>
                <RInput type="submit" value="Login"/>
                <span style={{fontSize: "14px"}}>
                    Nuevo usuario?
                    <DefaultLink onClick={_=>history.push(routes.signup)}>Sign up</DefaultLink>
                </span>
            </FormContainer>
        </CenteredLayout>
    )
}

export default Login