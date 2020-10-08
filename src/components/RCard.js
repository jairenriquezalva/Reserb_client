import React from 'react'
import styled from 'styled-components'

const FormatedImage = styled.img`
    display: block;
    width: inherit;
    height: 200px;
    box-sizing: border-box;
    position: relative;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    margin: 1em;
    border-radius: 4px;
    box-shadow: 0 0px 2px 1px lightgray; 
    &:hover {
        cursor: pointer;
    }
`

const ContentContainer = styled.div`
    margin: 0 15px;
    color: gray;    
    font-size: 15px;
`

const CardHeader = styled.div`
    padding: 0.5em;
    font-weight: bold;
    color: var(--main-color);
    transition: background 0.5s, color 0.5s;
    background: var(--main-bg-color);
    ${CardContainer}:hover & {
        background: var(--secondary-bg-color);
        color: var(--secondary-color);
    }
`

const RCard = (props)=>{
    return (
        <CardContainer onClick={props.action}>
            <CardHeader>{props.src.name}</CardHeader>
            <FormatedImage src={props.src.image}/>
            <ContentContainer>
                <p>Tiempo minimo de reserva: {props.src.reserveDuration} hs.</p>
            </ContentContainer>
        </CardContainer>
    )
}

export default RCard;