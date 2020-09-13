import styled from 'styled-components'

const RInput = styled.input`
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    ${props=>{
        if(props.type == 'submit')
            return `padding: 0.5em 1em;
                background-color: var(--main-bg-color);
                outline: none;
                border: none;
                border-radius: 3px;
                font-size: 24px;
                font-weight: bold;
                color: white;
                    cursor: pointer;
                transition: box-shadow 0.5s;
                &:hover {
                    box-shadow: inset 0 0 3px 1px black;
                }
                &:focus {
                    box-shadow: inset 0 0 3px 1px black;
                }`
    }}
`

export default RInput;