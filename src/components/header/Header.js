import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import SessionStatus from 'components/header/SessionStatus'
import styles from 'styles/components/header/header'
import routes from 'routes'

const useStyles = createUseStyles(styles);

const HeaderContainer = styled.header`
    height: ${props=>props.height}px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--main-bg-color);
    color: var(--main-color);
    box-shadow: inset 0 7px 9px -7px #00000055, inset 0 -7px 3px -7px #ffffff;
`;

const MyLink = styled(Link)`
    text-decoration: none;
    color: var(--main-color);
    &:hover{
        cursor: pointer;
    }
`

const Header = (props)=>{
    const classes = useStyles();
    
    return (
        <HeaderContainer height={props.height}>
            <h1>ReserB</h1>
            <ul className={classes.navigationBar}>
                <li><MyLink to={routes.login}>Home</MyLink></li>
            </ul>
            <SessionStatus/>
        </HeaderContainer>
    )
}

export default Header;