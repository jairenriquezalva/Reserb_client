const styles = {
    container: {
        display: 'grid',
        gridTemplateAreas: '"user profile"\n"actions profile"',
        width: '200px',
        height: '100px',
        marginRight: '100px'
    },
    user: {
        gridArea: 'user',
        margin: 'auto ',
        fontWeight: 'bold',
        width: '100px',
        overflow: 'hidden'
    },
    actions: {
        gridArea: 'actions',
        margin: 'auto',
        '& button': {
            fontSize: 16,
            fontFamily: 'Arial',
            border: 'none',
            outline: 'none',
            padding: '7px 15px',
            borderRadius: '3px',
            fontWeight: 'bold',
            background: 'white',
            transition: 'background 0.25s',
        cursor: 'pointer',
            '&:hover': {
                background: 'var(--danger-color)'
            }
        }
    },
    profile: {
        gridArea: 'profile',
        margin: 'auto',
        '& img': {
            width: '50px',
            height: '50px',
            borderRadius: '3px',
            boxShadow: '0 0 3px 0 gray'
        }
    },
}

export default styles;