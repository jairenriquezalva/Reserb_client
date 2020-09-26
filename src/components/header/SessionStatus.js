import React from 'react'
import createUseStyles from 'react-jss'

import styles from 'styles/components/header/sessionStatus'

const useStyles = createUseStyles(styles);

const SessionStatus = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.user}></div>
            <div className={classes.profile}></div>
            <div className={classes.actions}></div>
        </div>
    )
}

export default SessionStatus;