import React from 'react'
import styled from 'styled-components'

const FormatedImage = styled.img`
    display: block;
    width: inherit;
    height: 200px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid lightgray;
    box-sizing: content-box;
    position: relative;
    left: -2px;
    top: 2px;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid lightgray;
    box-shadow: 0 1px 1px lightgray; 
    width: 300px;
    margin: 1em;
    border-radius: 4px;
`

const ContentContainer = styled.div`
    margin: 0 15px;
`

const RCard = (props)=>{
    return (
        <CardContainer>
               <h3 style={{background: 'var(--main-bg-color)', padding: '1em',color: 'white', margin: 0}}>{props.src.name}</h3>
            <ContentContainer>
                <p>Descripcion lo</p>
                <p>Descripcion lo</p>
                <p>Descripcion lo</p>
                <h5 style={{background: 'white'}}>Tiempo minimo de reserva: {props.src.reserveDuration} hs.</h5>
            </ContentContainer>
            <FormatedImage src={props.src.image}/>
        </CardContainer>
    )
}

export default RCard;