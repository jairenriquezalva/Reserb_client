import React from 'react'
import { createUseStyles } from 'react-jss'
import { useHistory } from 'react-router'

import routes from 'routes'
import styles from 'styles/components/header/sessionStatus'
import { useSession } from 'hooks/Session'
import RLink from 'components/RLink'
import configuration from 'configuration'

const useStyles = createUseStyles(styles);

const SessionStatus = () => {
    const history = useHistory();
    const session = useSession();
    const classes = useStyles();

    const logout = ()=>{
        fetch(configuration.apiBaseUrl+'logout',{credentials: 'include'})
            .then(res=>res.json())
            .then(res=>{
                if(res.status==="success"){
                    session.setSessionData('');
                    history.push(routes.login);         
                }
            });
    }

    return (
        <div className={classes.container}>
            <div className={classes.user}>
                {session.sessionData || "incognito"}
            </div>
            <div className={classes.actions}>
                {
                    session.sessionData?
                    (<button onClick={logout}>Log out</button>)
                    :(<RLink to={routes.login}><button>Log In</button></RLink>)
                }
            </div>
            <div className={classes.profile}>
                <img src='https://canvas.utp.edu.pe/images/messages/avatar-50.png' alt="avatar"/>
            </div>
        </div>
    )
}

export default SessionStatus;