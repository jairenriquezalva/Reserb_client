import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'

import routes from 'routes'

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

const NavigatorLinkContainer = styled.ul`
    padding: 0;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
`

const MyLink = styled(Link)`
    text-decoration: none;
    color: var(--main-color);
    &:hover{
        cursor: pointer;
    }
`

const Header = (props)=>{
    return(
        <HeaderContainer height={props.height}>
            <h1>ReserB</h1>
            <nav>
                <NavigatorLinkContainer>
                    <li>
                        <MyLink to={routes.login}>Login</MyLink>
                    </li>
                    <li>
                        <MyLink to={routes.signup}>Sign Up</MyLink>
                    </li>
                </NavigatorLinkContainer>
            </nav>
        </HeaderContainer>
    )
}

export default Header;