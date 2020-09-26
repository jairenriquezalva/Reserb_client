const styles = {
    container: {
        display: 'grid',
        gridTemplateAreas: '"user profile"\n"actions profile"'
    },
    user: {
        gridArea: 'user'
    },
    actions: {
        gridArea: 'actions'
    },
    profile: {
        gridArea: 'profile',
        background: 'black',
    },
}

export default styles;