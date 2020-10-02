import React from 'react'
import styled from 'styled-components'
import { createUseStyles } from 'react-jss'

import styles from 'styles/components/header/header'
import routes from 'routes'
import { useSession } from 'hooks/Session'
import SessionStatus from 'components/header/SessionStatus'
import RLink from 'components/RLink'

const useStyles = createUseStyles(styles);

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--main-bg-color);
    color: var(--main-color);
    box-shadow: inset 0 7px 9px -7px #00000055, inset 0 -7px 3px -7px #ffffff;
`;

const Header = (props)=>{
    const classes = useStyles();
    const session = useSession();
    return (
        <HeaderContainer>
            <h1 className={classes.title}>ReserB</h1>
            <ul className={classes.navigationBar}>
                <li><RLink to={routes.home} color={"white"}>Home</RLink></li>
                <li><RLink to={routes.profile} disabled={!session.sessionData} color={"white"}>Profile</RLink></li>
            </ul>
            <SessionStatus/>
        </HeaderContainer>
    )
}

export default Header;