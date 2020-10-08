import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledCenteredLayout = styled.div`
    height: ${props=>props.height}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CenteredLayout = (props)=>{
    const ref = useRef(null);
    const [height, setHeight] = useState();

    const calculateheight = ()=>{
        setHeight(window.innerHeight-ref.current.getBoundingClientRect().y)
    }

    useEffect(()=>{
        calculateheight();
        window.addEventListener('resize',calculateheight)
        return ()=>window.removeEventListener('resize',calculateheight)
    },[])

    if(!props.scrolleable && ref.current)
        return(
        <StyledCenteredLayout ref={ref} height={height}>
            {props.children}
        </StyledCenteredLayout>
        )
    else    
        return(
        <StyledCenteredLayout ref={ref} >
            {props.children}
        </StyledCenteredLayout>
        )
}

export default CenteredLayout;