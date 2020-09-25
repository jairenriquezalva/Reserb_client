import React from 'react';
import {useState} from 'react';
import styled from 'styled-components'
import {useHistory} from "react-router-dom";
import {useAlert} from 'react-alert'

import CenteredLayout from 'components/CenteredLayout'
import FormContainer from 'components/FormContainer'
import Title from 'components/Title'
import RInput from 'components/RInput'
import configuration from 'configuration'
import routes from 'routes'

const InputGroup = styled.div`
    height: 55px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

const Signup = (props)=>{

    const alert = useAlert();
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [forenames,setForenames] = useState("");
    const [surnames, setSurnames] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState();
    
    const setEventValue = (setter,event)=>{
        setter(event.target.value);
    }

    const handleEmailInput = (event)=>{
        setEventValue(setEmail,event)
    }
  
    const handlePasswordInput = (event)=>{
        setEventValue(setPassword,event)
    }

    const handleForenamesInput = (event)=>{
        setEventValue(setForenames,event)
    }

    const handleSurnamesInput = (event)=>{
        setEventValue(setSurnames,event)
    }

    const handleBirthdateInput = (event)=>{
        setEventValue(setBirthdate,event)
    }

    const signupRequest = ()=>{
        let data = {
            eMail: email,
            password: password,
            forenames: forenames,
            surnames: surnames,
            birthdate: birthdate
        }
        fetch(configuration.apiBaseUrl+"customer",{
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
                    setTimeout(_=>history.push(routes.login),2000)
            alert.info("Usuario creado satisfactoriamente")
                }
                else
                    throw new Error()
            })
        .catch(err=>{
            alert.error('Contacte con el administrador!');
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        let valid = true;
        valid = /^\w+@\w+.\w+$/.test(email) && valid;
        valid = /^\w+$/.test(password) && valid;
        setError(!valid);
        setErrorMessage('No se pudo crear el usuario. Es posible que el correo ya se encuentre registrado.') 
        if(valid)
        signupRequest()        
    }

    return (
        <CenteredLayout height={props.height}>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Reserb Signup</Title>
                {error?<div><label>No se puedo crear el usuario:</label><br/><code style={{fontSize: '15px', color: 'red'}}>{errorMessage}</code></div>:<div></div>}
                <InputGroup>
                    <label>Correo electronico</label>
                    <input type="text" onKeyUp={handleEmailInput}/>
                </InputGroup>
                <InputGroup>
                    <label>Contraseña</label>
                    <input type="password" onKeyUp={handlePasswordInput}/>
                </InputGroup>
                <InputGroup>
                    <label>Nombres</label>
                    <input type="text" onKeyUp={handleForenamesInput}/>
                </InputGroup>
                <InputGroup>
                    <label>Apellidos</label>
                    <input type="text" onKeyUp={handleSurnamesInput}/>
                </InputGroup>
                <InputGroup>
                    <label>Fecha de nacimiento</label>
                    <input type="text" onKeyUp={handleBirthdateInput}/>
                </InputGroup>
                <RInput type='submit' value="Registrar" style={{marginTop: '1.5em'}}/>
            </FormContainer>
        </CenteredLayout>
    )
}

export default Signup;