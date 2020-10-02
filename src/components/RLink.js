import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover{
        cursor: ${props=>props.cursor?props.cursor:'pointer'};
    }
    color: ${props=>props.color?props.color:"#000000"};
`

const DisabledLink = styled.span`
    &:hover{
        cursor: ${props=>props.cursor?props.cursor:'pointer'};
    }
    color: ${props=>props.color?props.color:"#000000"};
`

const RLink = (props)=>{
    const disabled = props.disabled;
    return disabled?(
    <DisabledLink color={props.disabledColor} cursor={"not-allowed"}>
        {props.children}
    </DisabledLink>):(
    <StyledLink color={props.color} to={props.to}>
        {props.children}
    </StyledLink>)
    
}



export default RLink;