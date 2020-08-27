import React from 'react';
import {useState} from 'react';
import styled from 'styled-components'

const SignUpLayout = styled.div`
    height: ${props=>props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormContainer = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;
    height: 600px;
    width: 800px;
    padding: 20px;
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

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [forenames,setForenames] = useState();
    const [surnames, setSurnames] = useState();
    const [birthdate, setBirthdate] = useState();
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

    const handleSubmit = (event)=>{
        event.preventDefault()
        let valid = true;
        valid = /^\w+$/.test(email) && valid;
        valid = /^\w+$/.test(password) && valid;
        setError(!valid);
        setErrorMessage('no se pudo crear el usuario. Es posible que el correo ya se encuentre registrado.')
        alert(`
        email: ${email}
        password: ${password}
        valid: ${valid}
        `)
    }

    return (
        <SignUpLayout height={props.height}>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Reserb Signup</Title>
                {error?<label>No se puedo crear el usuario : <code>{errorMessage}</code></label>:<div></div>}
                <InputGroup>
                    <label>Correo electronico</label>
                    <input type="text" onKeyUp={handleEmailInput}/>
                </InputGroup>
                <InputGroup>
                    <label>Contraseña</label>
                    <input tyinputpe="password" onKeyUp={handlePasswordInput}/>
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
                <Submit value="Registrar"/>
            </FormContainer>
        </SignUpLayout>
    )
}

export default Signup;