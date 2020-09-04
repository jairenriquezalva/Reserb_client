import React from 'react';
import {useState} from 'react';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import configuration from 'configuration'
import routes from 'routes'
import CenteredLayout from 'components/CenteredLayout'


const FormContainer = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    height: 600px;
    width: 400px;
    padding: 20px;
    border: 1px solid lightgray;
`

const Submit = styled.input.attrs(_=>({type: 'submit'}))`
    padding: 0.5em 1em;
    background-color: var(--main-bg-color);
    outline: none;
    border: none;
    font-size: 24px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: box-shadow 0.5s;
    &:hover {
        box-shadow: inset 0 0 3px 2px white;
    }
`

const InputGroup = styled.div`
    height: 55px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

`
const Title = styled.h1`
    margin: 0.5em;
`

const Signup = (props)=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [forenames,setForenames] = useState("");
    const [surnames, setSurnames] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState();

    const history = useHistory();

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

    const handleSubmit = (event)=>{
        event.preventDefault()
        let valid = true;
        valid = /^\w+$/.test(email) && valid;
        valid = /^\w+$/.test(password) && valid;
        setError(!valid);
        setErrorMessage('No se pudo crear el usuario. Es posible que el correo ya se encuentre registrado.') 
        let data = {
            eMail: email,
            password: password,
            forenames: forenames,
            surnames: surnames,
            birthdate: birthdate
        }
        console.log(data)
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
                if(data.status==="success")
                    history.push(routes.login)
            })
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
                <Submit value="Registrar" style={{marginTop: '1.5em'}}/>
            </FormContainer>
        </CenteredLayout>
    )
}

export default Signup;