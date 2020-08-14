import React from 'react'
import {useEffect} from 'react'

import routes from 'routes'

const Login = () => {

    const submit = (e)=>{
        e.preventDefault(); 
    }

    useEffect(()=>{
        let token = sessionStorage.getItem('jwt');
        if(!token)
            ;
        else
            window.location.href = routes.home
    })

    return (
    <form onSubmit={submit}>
        <label>username</label>
        <input type="text"/>
        <label>password</label>
        <input type="password"/>
        <input type="submit" value="submit"/>
    </form>
    )
}

export default Login