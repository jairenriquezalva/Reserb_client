import styled from 'styled-components'

const CenteredLayout = styled.div`
    height: ${props=>props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default CenteredLayout;