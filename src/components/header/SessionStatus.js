import React from 'react'
import { createUseStyles } from 'react-jss'

import routes from 'routes'
import styles from 'styles/components/header/sessionStatus'
import { useSession } from 'hooks/Session'
import RLink from 'components/RLink'

const useStyles = createUseStyles(styles);

const SessionStatus = () => {
    const session = useSession();
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.user}>
                {session.sessionData || "incognito"}
            </div>
            <div className={classes.actions}>
                {
                    session.sessionData?(<button>Log out</button>):(<RLink to={routes.login}><button>Log In</button></RLink>)
                }
            </div>
            <div className={classes.profile}>
                <img src='https://canvas.utp.edu.pe/images/messages/avatar-50.png'/>
            </div>
        </div>
    )
}

export default SessionStatus;