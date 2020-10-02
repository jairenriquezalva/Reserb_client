import React from 'react'

import CenteredLayout from 'components/CenteredLayout'
import FormContainer from 'components/FormContainer'
import Title from 'components/Title'
import RLabel from 'components/RLabel'
import RInput from 'components/RInput'

const Profile = () => {
    return (
        <CenteredLayout>
            <FormContainer onSubmit={console.log('')}>
                <Title>User settings</Title>
                <RLabel>Email</RLabel>
                <RInput type="text" onKeyUp={console.log('')}/>
                <RLabel>Password</RLabel>
                <RInput type="password" onKeyUp={console.log('')}/>
                <RInput type="submit" value="Login"/>
            </FormContainer>
        </CenteredLayout>
    )
}

export default Profile;


